import { useState, useMemo } from "react";
const slowFunction = (num) => {
    console.log("Running slow function...");
    for (let i = 0; i < 1000000000; i++) {  } 
    return num*2
    
};
const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(false);

    const db = useMemo(() => slowFunction(number), [number]);

    const styling = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",

    };

    return (
        <> 
            <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
            
            <div style={styling}>
                <h1>This is a useMemo example.</h1>
                Type your number:{" "}
                <input 
                    type="number" 
                    value={number} 
                    onChange={(e) => setNumber(parseInt(e.target.value) )}
                />
                <h2>The number typed is: {number}</h2>
                <h2>The doubled number is: {db}</h2>
            </div>
        </>
    );
};
export default UseMemo;