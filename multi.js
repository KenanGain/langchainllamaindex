// import { MultiFileLoader } from "langchain/document_loaders/fs/multi_file";
// import { JSONLoader, JSONLinesLoader } from "langchain/document_loaders/fs/json";
// import { TextLoader } from "langchain/document_loaders/fs/text";
// import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";

// async function loadDocuments() {
//   try {
//     const loader = new MultiFileLoader(
//       [
//         'example.txt',
//         "customers-100.csv",
//         'example.json',
//         'example.jsonl'
//       ],
//       {
//         ".json": (path) => new JSONLoader(path, "/texts"),
//         ".jsonl": (path) => new JSONLinesLoader(path, "/html"),
//         ".txt": (path) => new TextLoader(path),
//         ".csv": (path) => new CSVLoader(path),
//       }
//     );

//     const docs = await loader.load();
//     console.log({ docs });
//     return docs;
//   } catch (error) {
//     console.error("Error loading documents:", error);
//     throw error;
//   }
// }

// // Execute the function
// loadDocuments().catch(error => {
//   console.error("Failed to load documents:", error);
//   process.exit(1);
// });

import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { JSONLoader, JSONLinesLoader } from "langchain/document_loaders/fs/json";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";

async function loadDocuments() {
  try {
    const loader = new DirectoryLoader(
      ".", // Assuming the files are in the current directory
      {
        ".json": (path) => new JSONLoader(path),
        ".jsonl": (path) => new JSONLinesLoader(path),
        ".txt": (path) => new TextLoader(path),
        ".csv": (path) => new CSVLoader(path),
      },
      true, // Use the glob option
      [
        'example.txt',
        'customers-100.csv',
        'example.json',
        'example.jsonl'
      ]
    );

    console.log("Loading documents...");
    const docs = await loader.load();
    console.log(`Loaded ${docs.length} documents`);
    return docs;
  } catch (error) {
    console.error("Error loading documents:", error);
    throw error;
  }
}

// Execute the function
loadDocuments()
  .then(docs => {
    console.log('Documents loaded successfully');
    console.log(docs);
  })
  .catch(error => {
    console.error("Failed to load documents:", error);
    process.exit(1);
  });