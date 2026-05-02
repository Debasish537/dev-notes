const mongoose = require('mongoose')


async function connectDB(){ //It will take time to connect with DB that's why it's async
   await mongoose.connect('mongodb+srv://learningapp:E0MLuRpYCoM1wBnQ@learningapp.gfdvk4y.mongodb.net/devnotesproject?appName=learningapp');
   console.log("Connected to MongoDB");
}

module.exports = connectDB;