import { PPTXLoader } from "@langchain/community/document_loaders/fs/pptx";

// Use the correct file path
const loader = new PPTXLoader("pptexamples.pptx");

const docs = await loader.load();

console.log(docs);
