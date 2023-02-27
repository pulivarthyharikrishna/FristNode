const { default: mongoose } = require("mongoose")
var mongo = require("mongoose")
const paginate = require('mongoose-paginate')


var details = new mongo.Schema({
    name:{
        type : String, 
        require : true,
     },

    cellnumber:{
        type:Number,
        require:true,
        unique:true
    },
    branch:{
        type:String,
    },
    city:{
        type:String
    }
    
})
details.plugin(paginate);
var student= mongo.model('student',details)

module.exports= student;

