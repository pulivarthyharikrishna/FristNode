var mongo = require("mongoose")


var details = new mongo.Schema({
    name:{
        type : String, 
        require : true,
     },

    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String
    }
    
    
})
var userlogin= mongo.model('userlogin',details)
module.exports= userlogin;

