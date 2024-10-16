﻿# langchainllamaindex



# Langchain & LlamaIndex Data Extraction

This repository is a full-fledged solution for data extraction using **Langchain** and **LlamaIndex**. The project leverages several JavaScript and Node.js tools to process and extract data from various sources such as PDFs, HTML, YouTube transcripts, wikis, and more.

## Features

- **Langchain Integration**: Orchestrates complex AI pipelines for querying and extracting data.
- **LlamaIndex Support**: Used to index and query large datasets.
- **PDF Handling**: Extract data from PDFs using `pdf.js`.
- **HTML to Text Conversion**: Easily convert HTML pages to plain text with `htmltotext.js`.
- **Playwright Automation**: Automate browser actions using `playwright.js`.
- **YouTube Transcription**: Extract YouTube video transcripts using `youtubets.js`.
- **Wiki Extractor**: Retrieve and process information from Wikipedia with `wiki.js`.
- **Multi-Source Data Handling**: Extract data from various sources with `multi.js`.
- **PPT and PDF Processing**: Handle PowerPoint presentations and PDFs using `ppt.js` and `pdf.js`.

## File Overview

| File                 | Description                                               |
|----------------------|-----------------------------------------------------------|
| `github.js`          | GitHub data integration module.                           |
| `hnews.js`           | Module to fetch data from Hacker News.                    |
| `htmltotext.js`      | Converts HTML pages to plain text.                        |
| `index.js`           | CSV File loader.                                          |
| `mscript.js`         | Script for managing multi-source data extraction.         |
| `multi.js`           | Handles multi-source data retrieval and processing.       |
| `package.json`       | Project dependencies and scripts.                         |
| `pdf.js`             | PDF parsing and data extraction.                          |
| `playwright.js`      | Automates browser interactions with Playwright.           |
| `ppt.js`             | PowerPoint presentation parser.                           |
| `pptexamples.pptx`   | Sample PowerPoint used for testing PPT extraction.        |
| `sample.pdf`         | Sample PDF file for testing extraction functions.         |
| `sitemap.js`         | Crawls and retrieves data from sitemaps.                  |
| `txt.js`             | Module for handling text files.                           |
| `wiki.js`            | Fetches and processes data from Wikipedia.                |
| `youtubets.js`       | Extracts YouTube video transcriptions.                    |

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the application**:
   ```bash
   node index.js
   ```

3. **Configure Your Data Sources**: Modify the relevant `.js` files to include your own data sources (e.g., PDF paths, website URLs, etc.).

## Dependencies

- **Langchain**: Powerful AI toolchain for processing and extracting data.
- **LlamaIndex**: Index and query structured data from various sources.
- **Playwright**: Headless browser automation tool.
- **pdf.js**: PDF parsing and data extraction.
- **PptxGenJS**: Handling PowerPoint files.
- **Cheerio**: Web scraping and HTML parsing.

## Contributing

Feel free to submit issues or pull requests for improvements or new features.

## License

This project is licensed under the MIT License.
