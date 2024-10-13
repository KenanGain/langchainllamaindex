import { HNLoader } from "@langchain/community/document_loaders/web/hn";

const loader = new HNLoader("https://news.ycombinator.com/item?id=34817881");

const docs = await loader.load();

console.log(docs)