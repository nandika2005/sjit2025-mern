import '../css/Signup.css'
import { Link } from 'react-router-dom';
function Signup(){
   return <div>
   <form>
   <label for="FName">FirstName:</label>
   <input type="text" placeholder="Enter your first name" required/>
   <label for="LName">LastName:</label>
   <input type="text" placeholder="Enter your Last name" required/>
   <label for="EName">EmailId:</label>
   <input type="email" placeholder="Enter your mail-id"required/>
   <label for="PName">Password:</label>
   <input type="password" placeholder="Enter your password" required/>
   <div><button>Submit</button></div>
   <Link to="/login">Already have an account?</Link>
   </form>
   </div>
}
export default Signup; 