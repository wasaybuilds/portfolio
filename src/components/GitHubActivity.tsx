import { ArrowUpRight, Star, GitFork } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/lib/data";

const GH_USER = "wasayhatzs";

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
};

/**
 * Fetches GitHub user stats and pinned/top repos from the public GitHub REST API.
 * Runs at build time as a Server Component — no token needed for public data,
 * and Vercel's ISR ensures it stays fresh on redeploy.
 *
 * To show private contribution data in the heatmap you would need a
 * GITHUB_TOKEN env variable — without one the heatmap still shows
 * all public contributions.
 */
async function getGitHubData() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GH_USER}`, {
        next: { revalidate: 86400 }, // revalidate once per day
        headers: { Accept: "application/vnd.github+json" },
      }),
      fetch(
        `https://api.github.com/users/${GH_USER}/repos?sort=updated&per_page=6&type=owner`,
        {
          next: { revalidate: 86400 },
          headers: { Accept: "application/vnd.github+json" },
        }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user: GitHubUser = await userRes.json();
    const repos: GitHubRepo[] = await reposRes.json();

    return { user, repos: repos.filter((r) => !r.fork).slice(0, 4) };
  } catch {
    return null;
  }
}

/** Language → colour pill mapping for the most common languages. */
const LANG_COLOUR: Record<string, string> = {
  TypeScript: "bg-sky-400/15 text-sky-300",
  JavaScript: "bg-yellow-400/15 text-yellow-300",
  Python:     "bg-blue-400/15 text-blue-300",
  CSS:        "bg-purple-400/15 text-purple-300",
  HTML:       "bg-orange-400/15 text-orange-300",
  Shell:      "bg-emerald-400/15 text-emerald-300",
};

export async function GitHubActivity() {
  const data = await getGitHubData();

  return (
    <section className="relative px-5 sm:px-8 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">

        {/* ---------- Section label ---------- */}
        <div className="mb-8 flex items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            GitHub
          </span>
          <div className="h-px flex-1 bg-border" />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            @{GH_USER}
          </a>
        </div>

        {/* ---------- Contribution heatmap ---------- */}
        {/*
          ghchart.rshah.org generates a contribution SVG directly from
          GitHub's public data — no token required for public profiles.
          The orange tint is applied with a CSS filter to match the palette.
        */}
        <div className="overflow-hidden rounded-2xl card-glass p-5 sm:p-6">
          <p className="mb-4 text-xs font-medium text-muted uppercase tracking-wider">
            Contribution activity · last year
          </p>
          <div className="overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/f97316/${GH_USER}`}
              alt="GitHub contribution chart"
              className="h-auto w-full min-w-[600px] opacity-80"
              loading="lazy"
            />
          </div>

          {/* Stats row */}
          {data && (
            <div className="mt-5 flex flex-wrap items-center gap-6 border-t border-border pt-5">
              <div>
                <div className="font-display text-xl font-bold text-foreground">
                  {data.user.public_repos}
                </div>
                <div className="text-xs text-muted">Public repos</div>
              </div>
              <div>
                <div className="font-display text-xl font-bold text-foreground">
                  {data.user.followers}
                </div>
                <div className="text-xs text-muted">Followers</div>
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group ml-auto inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
              >
                View all repos
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          )}
        </div>

        {/* ---------- Recent repos ---------- */}
        {data && data.repos.length > 0 && (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {data.repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-3 rounded-2xl card-glass p-5 transition-colors hover:border-accent/30"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-display text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                      {repo.name}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                  {repo.description && (
                    <p className="mt-1.5 text-xs leading-relaxed text-muted line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs text-muted">
                  {repo.language && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                        LANG_COLOUR[repo.language] ?? "bg-white/5 text-muted"
                      }`}
                    >
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      {repo.forks_count}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Fallback when API is unavailable */}
        {!data && (
          <div className="mt-4 rounded-2xl card-glass p-5 text-sm text-muted">
            GitHub data temporarily unavailable — view profile at{" "}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              github.com/{GH_USER}
            </a>
            .
          </div>
        )}
      </div>
    </section>
  );
}
