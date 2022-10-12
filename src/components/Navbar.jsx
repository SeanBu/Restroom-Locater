import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navContainer'>
            <ul className='navList'>
                <li className='navItem'><Link className='navLink' to="/">Home</Link></li>
                <li className='=navItem'><Link className='navLink' to="/login">Login</Link></li>
                <li className='navItem'><Link className='navLink' to="/register">Register</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;