import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow the ngrok tunnel to receive HMR websocket updates in development */
  allowedDevOrigins: ["schmalzier-eliana-nondropsically.ngrok-free.dev"],
};

export default nextConfig;
