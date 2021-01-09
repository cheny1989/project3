const mongoose = require("mongoose");

const URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ooadp.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const connectBD = async ()=>{
   await mongoose.connect(URI, {
       useUnifiedTopology: true,
       useNewUrlParser: true
    });
   console.log("DB connected")
}

module.exports = connectBD;