const mongoose = require("mongoose");
const mongodbURI = process.env.MONGODBURI;

async function connect() {
  try {
    await mongoose.connect(mongodbURI);
    console.log("Connected");
  } catch (error) {
    console.log("Failed");
  }
}

module.exports = { connect, mongodbURI };
