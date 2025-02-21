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
   <p><Link to="/Signup">Create an account?</Link></p>
   </form> 
   </div>)
}
export default Login;