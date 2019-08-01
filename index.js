const express = require("express");
const app = express();

app.arguments(require("./route/index"));

app.listen(4000, () => console.log("Running on port 4000"));
