const express= require("express")
const app= express()
app.use("/test",(req,res)=>{
res.send("hello from server from nodemon")
})
app.use("/hello",(req,res)=>{
res.send("hello from server from new hello royte")
})
app.listen(3000,()=>console.log("server sttarted on 3000"))