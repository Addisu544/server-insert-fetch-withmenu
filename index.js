const express = require("express");
const cors = require("cors");
const path = require("path");
const insertDataRouter = require("./database/insertData");
const fetchDataRouter = require("./database/fetchData");

const app = express();
const port = 2000;

// Enable CORS
app.use(cors());

// Serve static files from the uploads folder
app.use("/uploads", express.static("uploads"));

// Use the insertData router for handling insert requests
app.use("/data/insert", insertDataRouter);

// Use the fetchData router for handling fetch requests
app.use("/data/fetch", fetchDataRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
