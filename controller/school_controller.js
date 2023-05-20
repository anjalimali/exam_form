const School = require('../model/school')

exports.getschool = async (req, res) => {
    try {
        const data = await School.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.postschool = async (req, res) => {
    try {
        const data = await School.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.putschool = async (req, res) => {
    try {
        const data = await School.findByIdAndUpdete(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.deleteschool = async (req, res) => {
    try {
        const data = await School.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}