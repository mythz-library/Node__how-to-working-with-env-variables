const express = require("express");

// Create express application
const app = express();

// Start server
const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`Server runnning on port ${port}`);
});
