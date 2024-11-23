// require("dotenv").config(); // only works for .env file
const dotenv = require("dotenv");
const express = require("express");

// Load the appropriate .env file
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });

// Create express application
const app = express();

// Start server
const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`Server runnning on port ${port}`);
});
