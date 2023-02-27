var express = require("express")
var config = require("./config/configset")
const cors =  require("cors")
const connectDB = require('./config/db');
const usersRoute = require('./routers/rout')
const bobyparse = require('body-parser')
const loginRouter = require('./routers/loginRouter')


connectDB()
var app = express();
app.use(cors())
app.use(bobyparse.urlencoded({extended:true}))
app.use(bobyparse.json())
app.use("/api/v1/user", usersRoute)
app.use("/api/v1/login",loginRouter)

app.listen(config.port,()=>{
    console.log (`run on server::::::`,config.baseUrl)
})