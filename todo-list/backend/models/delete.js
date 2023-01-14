const  Task = require('./task')
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
 mongoose.connect('mongodb://0.0.0.0:27017/todo',{
    useUnifiedTopology:true,
    useNewUrlParser:true
 })

const  db = mongoose.connection
db.on('error',console.error.bind(console,"connection error"))
db.once("open",()=>{
  console.log("Release")  
})


const seedDB = async()=>{
     
        await Task.deleteMany({})
     
    }
    
    seedDB()