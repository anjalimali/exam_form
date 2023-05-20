require('dotenv/config')
const Form_route = require('./route/form_route')
const School_route = require('./route/school_route')

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("this is home page")
})

// main route
app.use('/api/form',Form_route)

app.use('/api/school',School_route)

app.listen(process.env.PORT,()=>{
    console.log("listing on port 5000");
})

async function main(){
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
main()