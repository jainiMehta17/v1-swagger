import express, { Application } from "express";
import * as swaggerUi from "swagger-ui-express";
import * as fs from "fs";

// const YAML = require("yamljs");
// const swaggerJsDocs = YAML.load("./swagger/index.yaml");

const PORT = 5000;
const app = express();
const swaggerFile: string = `${process.cwd()}/swagger/index.json`;
const swaggerData: string = fs.readFileSync(swaggerFile, "utf8");
const swaggerJSON = JSON.parse(swaggerData);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJSON, null, null, null)
);
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
