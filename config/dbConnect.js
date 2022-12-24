const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.set('strictQuery', false);
    return mongoose.connect("mongodb+srv://dclokesh:dcPrashant@development.9vwaikf.mongodb.net/development")
}


module.exports = dbConnect;