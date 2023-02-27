const control = require("../control/loginControl")
const express = require("express")
const loginRouter = express.Router()
loginRouter.post('/register',control.register)
loginRouter.post("/sinin",control.login)
loginRouter.put("/forgot",control.forGotPassword)
module.exports = loginRouter