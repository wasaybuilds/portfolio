import { ArrowUpRight, Star, GitFork } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";
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

    return { user, repos: repos.filter((r) => !r.fork).slice(0, 3) };
  } catch {
    return null;
  }
}

export async function GitHubActivity() {
  const data = await getGitHubData();

  return (
    <section className="relative px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">

        <EditorialSectionHeader
          index="07"
          label="GitHub"
          title="Still shipping."
          meta={
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              @{GH_USER}
            </a>
          }
        />

        {/* ---------- Contribution heatmap ---------- */}
        {/*
          ghchart.rshah.org generates a contribution SVG directly from
          GitHub's public data — no token required for public profiles.
          The orange tint is applied with a CSS filter to match the palette.
        */}
        <div className="overflow-hidden border border-border bg-background-soft p-5 sm:p-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
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
          <div className="mt-8 divide-y divide-border border-y border-border">
            {data.repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 py-5 transition-colors hover:bg-background-soft sm:grid-cols-[1fr_auto] sm:px-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                      {repo.name}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent sm:hidden" />
                  </div>
                  {repo.description && (
                    <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted line-clamp-1">
                      {repo.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-4 text-xs text-muted sm:justify-end">
                  {repo.language && (
                    <span className="font-medium text-foreground/80">
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
                  <ArrowUpRight className="hidden h-4 w-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent sm:block" />
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Fallback when API is unavailable */}
        {!data && (
          <div className="mt-4 border border-border bg-background-soft p-5 text-sm text-muted">
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
