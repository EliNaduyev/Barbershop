const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path:'./config.env' })

const connectDB = async () => {

  try{
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log('MongoDB database connection established successfully');
    });
  }
  catch(err){
    console.log(err)
  }
}

module.exports = connectDB
