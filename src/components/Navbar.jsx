import { Link } from 'react-router-dom'

function Navbar() {

    function logout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
    }

    return (
        <div className='navContainer'>
            <ul className='navList'>
                <li className='navItem'><Link className='navLink' to="/">Home</Link></li>
                <li className='=navItem'><Link className='navLink' to="/login">Login</Link></li>
                <li className='navItem'><Link className='navLink' to="/register">Register</Link></li>
                <li className='navItem'><Link className='navLink' onClick={logout} to="/">Logout</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;