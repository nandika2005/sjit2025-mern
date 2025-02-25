const express=require('express')
const app=express()
app.get("/login",(req,res)=>{
     res.sendFile("C:\\Users\\nandi\\OneDrive\\Desktop\\merntrain\\Html with styling\\index.html")
})
const port=3002
app.listen(port,()=>console.log('Server is listening to:',port))
