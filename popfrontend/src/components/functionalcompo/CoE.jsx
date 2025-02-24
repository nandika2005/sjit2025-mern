import { createContext } from "react";
import Faculty from "./ContextAPI/Faculty";
export const ResultPublish=createContext();
const CoE=()=>{
    return(

        <ResultPublish.Provider value={{sgpa:"10 SGPA",cgpa:"10 CGPA"}}>
            <Faculty/>
            <h1>Results published</h1> 
       </ResultPublish.Provider>
    )
}
export default CoE;
