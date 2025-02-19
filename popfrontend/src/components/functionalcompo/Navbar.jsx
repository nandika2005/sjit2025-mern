import { Link } from 'react-router-dom';
import '../css/Navbar.css'
const Navbar=()=>{
    return(
        <header>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                <div>
                    <span>Hooks</span>
                    <ol>
                        <li><Link to='/Gallery'>UseState</Link></li>
                        <li><Link to='/UseEffect'>UseEffect</Link></li>
                    </ol>
                </div>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/Signup'>Signup</Link></li>
            </nav>
        </header>
    )
}
export default Navbar;