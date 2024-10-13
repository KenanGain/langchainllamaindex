import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const pdf = "sample.pdf";

const loader = new PDFLoader(pdf);
const docs = await loader.load();
console.log(docs[0]);
console.log(docs[0].metadata);

