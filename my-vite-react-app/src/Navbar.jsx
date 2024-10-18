import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='NavbarContainer'>
            <ul className='NavbarUl1'>
                <li>
                    <Link to="/">
                        <img className='LogoMini' src="LogoMini.png" alt="Logo" />
                    </Link>
                </li>
            </ul>
            <ul className='NavbarUl2'>
                <li><Link to="/new-cars">New Cars</Link></li>
                <li><Link to="/used-cars">Used Cars</Link></li>
                <li><Link to="/compare">Compare</Link></li>
                <li><Link to="/sell">Sell</Link></li>
                <li><Link to="/article">Article</Link></li>
            </ul>
            <ul className='NavbarUl3'>
                <li><Link to="/signin">Signin</Link></li>
                <li>EN</li>
            </ul>
        </nav>
    );
};

export default Navbar;
