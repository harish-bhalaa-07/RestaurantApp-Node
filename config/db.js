const mongoose = require("mongoose");
const colors = require("colors");
//function mmongodb dfatabase connection
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://Harish:harish@cluster0.sb4ratg.mongodb.net/?retryWrites=true&w=majority");
    console.log(`Connected To Database ${mongoose.connection.host} `.bgWhite);
  } catch (error) {
    console.log("DB Error", error);
  }
};
module.exports = connectDb;
