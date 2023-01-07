const express  = require("express")
const port = 3000
const app =  express()
const mongoose =  require("mongoose")



mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/student_api')
.then(()=>{
    console.log("connected to mongodb server")})
.catch((err)=>next(err))

app.use((req,res,next)=>{
    next()
})
app.use(express.json())

app.use("/user",require("./routes/user_routes"))
app.use("/batch",require("./routes/batch_routes"))
app.use("/course",require("./routes/course_routes"))

app.listen(port,()=>{
    console.log("app is running on port 3000")
})

app.use((err,req,res,next)=>{
    if(res.statusCode == 200) res.status(500)
console.log(err)
res.status(500).json({"msg":err.message})
})