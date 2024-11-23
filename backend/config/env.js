require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5005,
  dbConfig: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
  },
};
