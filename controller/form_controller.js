require('dotenv/config')
const Form = require('../model/form')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getform = async (req,res)=>{
    try {
       const data = await Form.find()
       return res.json({errors:false,data:data}) 
    } catch (error) {
       return res.status(400).json({errors:true,message:error.message}) 
    }
}

exports.formregistration = async (req,res)=>{
    try {
        const userExist = await Form.findOne({email:req.body.email})
        if(userExist) return res.status(400).json({errors:true,message:"user already exist"})

        // encryption
        const salt  =await  bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password,salt)

        const data = await Form.create(req.body)
        return res.status(400).json({errors:false,data:data})

    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


exports.putform = async (req,res)=>{
    try {
        const data = await Form.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteform = async (req,res)=>{
    try {
        const data = await Form.findByIdAndDelete(req.params.id)
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.login = async (req,res)=>{
    try {
        const userExist = await Form.findOne({email:req.body.email})
        if(!userExist) return res.status(400).json({errors:true,message:"Email or Password Invalid"})

        const validpassword = await bcrypt.compare(req.body.password,userExist.password)
        if(!validpassword) return res.status(400).json({errors:true,message:"email or password Invalid"})

        const token = await jwt.sign({id:userExist._id},process.env.SCE)
        return res.json({errors:false,data:{token:token,form:userExist}})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}