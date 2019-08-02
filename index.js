const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");

app.use(parser.json());
app.use(require("./route/index"));
app.use(cors);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () =>
  console.log(`Running on port ${app.get("port")}`)
);
