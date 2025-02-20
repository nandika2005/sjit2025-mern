import '../css/Signup.css'
import { Link } from 'react-router-dom';
function Signup(){
   return <div>
   <form>
   <label for="FName">FirstName:</label>
   <input type="text" placeholder="Enter your first name"/>
   <label for="LName">LastName:</label>
   <input type="text" placeholder="Enter your Last name"/>
   <label for="EName">EmailId:</label>
   <input type="email" placeholder="Enter your mail-id"/>
   <label for="PName">Password:</label>
   <input type="password" placeholder="Enter your password"/>
   <div><button>Submit</button><Link to="/login">Already have an account?</Link></div>
   </form>
   </div>
}
export default Signup;