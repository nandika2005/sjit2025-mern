import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [drop, setDropdownVisible] = useState(false);

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
                     </ol>
                   )}
                </div>
             
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </nav>
        </header> 
    );
};

export default Navbar;
