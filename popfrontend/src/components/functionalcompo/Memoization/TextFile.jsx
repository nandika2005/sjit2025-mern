import { useState } from "react";
import {memo} from "react";
const TextFile=()=>{
    var [text,setNum]=useState("");
    return(
        <div>
            <h2>This is a text box</h2>
            <input type="text" value={text} onChange={(e)=>setNum(e.target.value)}/>
            <h3>The text is {text}</h3>
        </div>
    )
}
export default memo(TextFile);