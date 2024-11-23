const config = require("config");
const express = require("express");

// Create express application
const app = express();

const dbConfig = config.get("Customer.dbConfig");
console.log(dbConfig);

// Start server
const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`Server runnning on port ${port}`);
});
