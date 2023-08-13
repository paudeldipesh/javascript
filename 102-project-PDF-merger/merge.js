const PDFMerger = require("pdf-merger-js");

let merger = new PDFMerger();

const mergePDFs = async (pdfOne, pdfTwo) => {
    await merger.add(pdfOne);
    await merger.add(pdfTwo);
    let date = new Date().getTime();
    await merger.save(`public/${date}.pdf`);
    return date;
};

module.exports = { mergePDFs };
