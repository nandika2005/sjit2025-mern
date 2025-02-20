import { useState } from "react";
function About(){
   var state=0;
   var [num,setNum]=useState(state)
   function handleDecrement(){
      setNum(num-1)
   }
   return (<div>
    <h1>About</h1>
    <h2>State initial value is:{state}</h2>
    <button onClick={handleDecrement}>-</button>
    <h3>Updating state:{num}</h3>
    <button onClick={()=>setNum(num+1)}>+</button>
   <div>
   <button onDoubleClick={()=>setNum(num=0)}>reset</button>
      </div> 
      <div>
         <textarea></textarea>
      </div>   
   </div>
   );
}
export default About;