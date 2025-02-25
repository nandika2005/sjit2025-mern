import { createContext } from "react";
import Faculty from "./ContextAPI/Faculty";
import StudentResult from "./ContextAPI/StudentResult";
export const ResultPublish=createContext();
const CoE=()=>{
    return(

        <ResultPublish.Provider value={{sgpa:"10 SGPA",cgpa:"10 CGPA"}}>
            <h1>Results published</h1> 
            <StudentResult/>
       </ResultPublish.Provider>
    )
}
export default CoE;

