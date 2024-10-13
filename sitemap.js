import { SitemapLoader } from "@langchain/community/document_loaders/web/sitemap";

const loader = new SitemapLoader("https://www.langchain.com/");

const docs = await loader.load();
console.log(docs.length);
/**
26
 */
console.log(docs[0]);