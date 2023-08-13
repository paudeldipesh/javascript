const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const { mergePDFs } = require("./merge");
const port = 3000;

const upload = multer({ dest: "uploads/" });
app.use("/static", express.static("public"));

app.get("/", (request, response) => {
    response.sendFile(path.join(`${__dirname}/templates/index.html`));
});

app.post("/merge", upload.array("pdfs", 2), async (request, response, next) => {
    // console.log(request.files);
    let date = await mergePDFs(
        path.join(__dirname, request.files[0].path),
        path.join(__dirname, request.files[1].path)
    );
    response.redirect(`http://localhost:3000/static/${date}.pdf`);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
