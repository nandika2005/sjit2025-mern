const express=require('express')
const app=express()
const mdb=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();
const Signup=require("./models/signupSchema")
app.use(express.json())
app.get("/login",(req,res)=>{
     res.sendFile("C:\\Users\\nandi\\OneDrive\\Desktop\\merntrain\\Html with styling\\index.html")
})
const port=3002
mdb.
connect("mongodb+srv://nandikamaheshwar6:3Br1q4Bx0ebpDtdX@popbackend.oltm4.mongodb.net/test")
.then(()=>{console.log("MongoDB connected successfully")})
     .catch((err)=>{
 console.log(err);
});
app.post("/signup",(req,res)=>{
     try{
          const {firstName,lastName,email,password,phoneNumber}=req.body
      const newSignup=new Signup({
          firstName: firstName,
          lastName: lastName,
          email:email,
          password:password,
          phoneNumber:phoneNumber
     });
     newSignup.save()
     console.log("Signup successful");
    res.status(201).json({message:"signup successful",isSignUp:true});
}catch(err){
     console.log(err);
     res.status(201).json({message:"Signup unsuccessful",isSignUp:false})
}
})
app.listen(port,()=>console.log('Server is listening to:',port))
