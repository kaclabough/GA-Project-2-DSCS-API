const express = require("express");
const app = express();

app.use(require("./route/index"));

app.listen(4000, () => console.log("Running on port 4000"));
