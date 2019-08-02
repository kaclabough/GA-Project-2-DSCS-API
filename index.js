const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.json());
app.use(require("./route/index"));

app.listen(4000, () => console.log("Running on port 4000"));
