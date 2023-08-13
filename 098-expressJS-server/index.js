const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    // console.log(request.query.name);
    response.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", (request, response) => {
    response.sendFile(path.join(`${__dirname}/about.html`));
});

app.get("/contact", (request, response) => {
    response.sendFile(`${__dirname}/contact.html`);
});

app.get("*", (request, response) => {
    response.send(`<div style="font-size: 30px; background-color: black; padding: 10px">
    <p style="font-family: sans-serif; text-align: center; color: white">
        Page Not Found!
    </p>
</div>`);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
