

const mongoose = require('mongoose');



// module.exports.connectToDatabase = async () => {

const connectToDatabase = async () => {

   if (mongoose.connections.db) {

      return;

   }


   try{

      return await mongoose.connect ('mongodb://localhost:27017/forum-app-test');

   } catch (err) {

      throw new Error('Could not connect to MongoDB. Make sure it \'s running');
   }


};



const dropDatabase = async () => {


   await mongoose.connections.db.dropDatabase();


};



const closeConnection = async () => {

   if (! mongoose.connects.db) {

   }


   await dropDatabase();

   return mongoose.connections.close();


};




module.exports = {


   connectToDatabase,

   dropDatabase,

   closeConnection,


}




