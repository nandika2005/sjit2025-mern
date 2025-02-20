import { Link } from 'react-router-dom';
import '../css/Login.css'
function Login(){
   return (<div>
   <form>
   <label htmlFor="EName">EmailId:</label>
   <input type="email" placeholder="Enter your mail-id" required/>
   <label htmlFor="PName">Password:</label>
   <input type="password" placeholder="Enter your password" required/>
   <button>Submit</button>
   </form> 
   <div><Link to="/Signup">Create an account?</Link></div>
   </div>)
}
export default Login;