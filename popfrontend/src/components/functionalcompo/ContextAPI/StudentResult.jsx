import { useContext } from "react";
import { ResultPublish } from "../CoE";
const StudentResult=()=>{
    const result=useContext(ResultPublish)
return(
    <div>
    <h1>Result:</h1>
    <h2>Sgpa:{result.sgpa}</h2>
    <h2>Cgpa:{result.cgpa}</h2>
    </div>
)
}
export default StudentResult;