
const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config()

app.listen(process.env.PORT,console.log("i am listen to port 3000"))

const bodyParser=require('body-parser')
app.use(bodyParser.json())

const router=require('./router')
app.use('/',router)


//connect to mongoose:
const connctionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

const mongoose=require("mongoose")
mongoose.connect(process.env.myDB,connctionParams)
.then(()=>console.log("i am conection"))
.catch((error)=>console.log("not connection",error))

mongoose.set('useFindAndModify', false);
