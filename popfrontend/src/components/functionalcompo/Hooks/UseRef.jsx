import { useEffect, useRef, useState } from "react";
const UseRef=()=>{
    var[text,setText]=useState("")
    var Previous=useRef()
    useEffect(()=>{
       Previous.current=text;
},[text]);
    return(
        <section>
        <h1>This is UseEffect</h1>
        Type Your text:{" "}
        <input type="text"  value={text} onChange={(event)=>setText(event.target.value)}/>
        <h2>The current render typed : {text}</h2>
        <h2>The previous render is : {Previous.current}</h2>
        </section>
    )  
}
export default UseRef;