import type { NextConfig } from "next";

// GitHub Pages（プロジェクトページ）で公開するための静的エクスポート設定
const repoName = "kagiya-test";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // プロジェクトページは https://<user>.github.io/<repo>/ の下に配信されるため、
  // basePath / assetPrefix をリポジトリ名に合わせる（GitHub Actions実行時のみ）
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
};

export default nextConfig;
