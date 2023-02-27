var mongoose = require('mongoose')
var config = require("../config/configset")
var connectDB = async () => {
let mongoUrl = ''
mongoUrl = "mongodb://"+ config.mongo.host +"/"+config.mongo.database

    console.log('mongoUrl', mongoUrl)
    
    const conn = await  mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`Mongo DB Connected `);
}
module.exports = connectDB;
