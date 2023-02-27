var express = require("express")
var routers = express.Router()
var control = require("../control/usercontrol")
routers.post('/users',control.allUsers)
routers.put('/update/:id',control.update)
 routers.post('/store', control.store)
 routers.get('/oneitem/:id',control.getOneData)
 routers.delete('/delete/:id',control.deleteItem)

 module.exports = routers