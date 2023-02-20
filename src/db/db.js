const mongoose = require("mongoose");

// Connect to the database
const URI = process.env.MONGODB_URL;
mongoose.set("strictQuery", false);
let MongoDBClient = { useNewUrlParser: true, useUnifiedTopology: true };
const db = mongoose.connect(URI, MongoDBClient, () => {
  try {
    console.log(`MongoDB Connected on: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
});
module.exports = db;
// client.db("MEAN");
