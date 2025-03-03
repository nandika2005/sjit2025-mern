import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [drop, setDropdownVisible] = useState(false);
    const [drop1, setDropdownVisible1] = useState(false);

    return (
        <header>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                
                <div 
                    className="box" 
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                >
                   <span style={{ color: "white", cursor: "pointer" }}>
                     Hooks
                   </span>
             
                   {drop && (
                     <ol className="box-1">
                       <li className="box-2"><Link to="/Gallery">UseState</Link></li>
                       <li className="box-2"><Link to="/UseEffect">UseEffect</Link></li>
                       <li className="box-2"><Link to="/UseEffectApi">UseEffectApi</Link></li>
                       <li className="box-2"><Link to="/Useref">UseRef</Link></li>
                       <li className="box-2"><Link to="/UseMemo">UseMemo</Link></li>
                       <li className="box-2"><Link to="/UseCallBack">UseCallBack</Link></li>
                       <li className="box-2"><Link to="/Usememoize">Usememoize</Link></li>
                     </ol>
                   )}
                </div>
                <li><Link to='/Hoc'>HOC</Link></li>
                <div className="box"
                onMouseEnter={() => setDropdownVisible1(true)}
                onMouseLeave={() => setDropdownVisible1(false)}>
                  <span style={{ color: "white", cursor: "pointer" }} >Memoization</span>
                  {drop1 && (
                  <ol className="box-1">
                    <li className="box-2"><Link to="/Memo">Memo</Link></li>
                    <li className="box-2"><Link to="/Lazy">LazyLoading</Link></li>
                  </ol>
                  )}
                </div>
                <li><Link to='/Student'>ContextAPI</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </nav>
        </header> 
    );
};

export default Navbar;