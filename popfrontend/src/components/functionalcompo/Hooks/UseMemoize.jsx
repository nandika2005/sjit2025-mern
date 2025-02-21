import useMemoize from "./CustomHooks/memorizingHook"
const UseMemoize = () =>{
    var [custID, setCustID] = useMemoize("CustomerID", "")
    var [pass, setPass] = useMemoize("Password", "")
    return(
        <div>
            <h1>This is a custom hook designed using</h1>
            CustomerID: <input type="text" value={custID} onChange={(e) =>setCustID(e.target.value)}/><br/>
            PassWord: <input type="text" value={pass} onChange={(e) =>setPass(e.target.value)}/>
            <button>Login</button>
        </div>
    )
}
export default UseMemoize;