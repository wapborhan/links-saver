const mongoose = require("mongoose");
require("dotenv").config();

const getConnectionString = () => {
  let connectionUrl;

  if (process.env.NODE_ENV === "development") {
    connectionUrl = process.env.DATABASE_LOCAL;
    connectionUrl = connectionUrl.replace(
      "<db_username>",
      process.env.DATABASE_LOCAL_USERNAME
    );
    connectionUrl = connectionUrl.replace(
      "<db_password>",
      process.env.DATABASE_LOCAL_PASSWORD
    );
  } else {
    connectionUrl = process.env.DATABASE_PROD;
  }

  return connectionUrl;
};

const dbConnection = async () => {
  console.log("Connecting to Database .....");

  const mongoURI = getConnectionString();

  mongoose.set("strictQuery", false);

  await mongoose.connect(mongoURI, { dbName: process.env.DB_NAME });
  console.log("Connected to Database.");
};

module.exports = dbConnection;
