import { Link } from 'react-router-dom';
import '../css/Login.css'
import { useState } from 'react';
import axios from 'axios'
function Login(){
   const [email,setEm]=useState("")
   const[password,setPass]=useState("")
   const handleLogin=async(event)=>{
      event.preventDefault();
      const req=await axios.post("http://localhost:3002/login",{
         email: email,
         password:password,
      });
      const message=req.data.message;
      alert(message);
   };
   return (<div>
   <form onSubmit={handleLogin}>
   <label htmlFor="EName">EmailId:</label>
   <input type="email"  value={email} onChange={e=>setEm(e.target.value)} placeholder="Enter your mail-id" required/>
   <label htmlFor="PName">Password:</label>
   <input type="password" value={password}onChange={e=>setPass(e.target.value)} placeholder="Enter your password" required/>
   <button>Submit</button>
   <p><Link to="/Signup">Create an account?</Link></p>
   </form> 
   </div>)
}
export default Login;