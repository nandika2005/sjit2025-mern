import '../css/Login.css'
function Login(){
   return (<div>
   <form>
   <label for="EName">EmailId:</label>
   <input type="email" placeholder="Enter your mail-id"/>
   <label for="PName">Password:</label>
   <input type="password" placeholder="Enter your password"/>
   <button>Submit</button>
   </form>
   </div>)
}
export default Login;