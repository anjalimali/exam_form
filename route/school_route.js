const { getschool, postschool, putschool, deleteschool } = require('../controller/school_controller')
const {auth} = require('../middleware/auth')

const route = require('express').Router()

route.get('/', getschool)

route.post('/',auth, postschool)

route.put('/:id', putschool)

route.delete('/:id', deleteschool)

module.exports = route