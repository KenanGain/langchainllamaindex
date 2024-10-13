// import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";

// export const run = async () => {
//   const loader = new GithubRepoLoader(
//     "https://github.com/langchain-ai/langchainjs",
//     {
//       branch: "main",
//       recursive: false,
//       unknown: "warn",
//       maxConcurrency: 2, // Defaults to 2
//     }
//   );
//   const docs = await loader.load();
//   console.log({ docs });
// };
// import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";

// export const run = async () => {
//   const loader = new GithubRepoLoader(
//     "https://github.com/langchain-ai/langchainjs",
//     { branch: "main", recursive: false, unknown: "warn", ignorePaths: ["*.md"] }
//   );
//   const docs = await loader.load();
//   console.log({ docs });
//   // Will not include any .md files
// };

// import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";

// export const run = async () => {
//   const loader = new GithubRepoLoader(
//     "https://github.com/langchain-ai/langchainjs",
//     {
//       branch: "main",
//       recursive: true,
//       processSubmodules: true,
//       unknown: "warn",
//     }
//   );
//   const docs = await loader.load();
//   console.log({ docs });
// };
import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";

export const run = async () => {
  const loader = new GithubRepoLoader(
    "https://github.com/langchain-ai/langchainjs",
    {
      branch: "main",
      recursive: false,
      unknown: "warn",
      maxConcurrency: 3, // Defaults to 2
    }
  );

  const docs = [];
  for await (const doc of loader.loadAsStream()) {
    docs.push(doc);
  }

  console.log({ docs });
};