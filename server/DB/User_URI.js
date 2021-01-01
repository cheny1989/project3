const mongoose = require("mongoose");

const URI = "mongodb+srv://dbuser:dbuser123@cluster0.ooadp.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectBD = async ()=>{
   await mongoose.connect(URI, {
       useUnifiedTopology: true,
       useNewUrlParser: true});
   console.log("DB User connected")
}

module.exports = connectBD;