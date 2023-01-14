const express = require("express")
const app = express()
const cors = require('cors')
const router = require("./router")
const mongoose = require("mongoose")
mongoose.set("strictQuery",true)
mongoose.connect('mongodb://0.0.0.0:27017/todo',{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
 const db = mongoose.connection
 db.on('error',console.error.bind(console,"connection error"))
 db.once("open",()=>{
    console.log("Lists can be done")
 })


app.use(express.json())
app.use(cors())
app.use('/api/tasks',router)


app.listen(5000,(req,res)=>{
    console.log("Todos List are strictly tracked")
})