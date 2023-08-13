const pdf = require("pdf-node");
const fs = require("fs");

let html = fs.readFileSync("input.html", "utf8");

let options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Dipesh Paudel</div>',
    },
    footer: {
        height: "28mm",
        contents: {
            first: "Cover page",
            2: "Second page",
            default: "<span>UI PDF Generator</span>",
            last: "Last Page",
        },
    },
};

let document = {
    html: html,
    data: {},
    path: "./output.pdf",
    type: "pdf",
};

pdf(document, options)
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((error) => {
        console.error(error);
    });
