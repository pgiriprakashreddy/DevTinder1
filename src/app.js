const express= require("express")
const app= express()
app.use("/test",(req,res)=>{
res.send("hello from server from nodemon")
})
app.listen(3000,()=>console.log("server sttarted on 3000"))