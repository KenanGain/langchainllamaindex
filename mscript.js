import { IMSDBLoader } from "@langchain/community/document_loaders/web/imsdb";

const loader = new IMSDBLoader("https://imsdb.com/scripts/Transformers.html");

const docs = await loader.load();

console.log(docs)