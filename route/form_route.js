const {getform,formregistration,putform,deleteform,login}=require('../controller/form_controller')

const route = require('express').Router()

route.get('/',getform)

route.post('/',formregistration)

route.post('/login',login)

route.put('/:id',putform)

route.delete('/:id',deleteform)

module.exports =route