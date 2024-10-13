import { PlaywrightWebBaseLoader } from "@langchain/community/document_loaders/web/playwright";

/**
 * Loader uses `page.content()`
 * as default evaluate function
 **/
const loader = new PlaywrightWebBaseLoader("https://www.nature.com/articles/s41586-024-07943-7");

const docs = await loader.load();
console.log(docs)

