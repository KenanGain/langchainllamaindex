import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";

const csv = "customers-100.csv";

const loader = new CSVLoader(csv);

console.log(loader);

const docs = await loader.load();
console.log(docs[0]);
console.log(docs[0].metadata);

const loader2 = new CSVLoader('customers-100.csv', {
    separator: '｜'  // Ensure this matches the actual separator in your file
  });
  
  // Load and process the CSV
  loader2.load().then((data) => {
    console.log(data);
  }).catch((error) => {
    console.error(error);
  });



  