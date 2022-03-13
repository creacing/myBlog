---
title: node 解析pdf
description: node 解析pdf
date: 2022-01-19
tags:
  - node
---

```javascript
const PDFParser = require("pdf2json");
 
const pdfParser = new PDFParser(this, 1);
 
function readPDF(fileName) {
    pdfParser.loadPDF(fileName);
    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
 
    pdfParser.on("pdfParser_dataReady", pdfData => {
        const data = pdfParser.getRawTextContent()
        console.log('文本信息:', data)
    });
}
module.exports = {
    readPDF
}```




