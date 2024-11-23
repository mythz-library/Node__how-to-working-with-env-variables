const env = require("./config/env");
const express = require("express");

// Create express application
const app = express();

console.log(env.dbConfig);

// Start server
app.listen(env.port, () => {
  console.log(`Server runnning on port ${env.port}`);
});
