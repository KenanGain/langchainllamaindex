import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";

const loader = YoutubeLoader.createFromUrl("https://www.youtube.com/watch?v=QxLd_WNipPY", {
  language: "en",
  addVideoInfo: true,
});

const docs = await loader.load();

console.log(docs);