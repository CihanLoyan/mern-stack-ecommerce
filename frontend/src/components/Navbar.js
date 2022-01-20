import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
const Navbar = ({ click }) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>e-ticaret sitesi </h2>
                <span>
                    <i class="fab fa-opencart"></i>
                </span>
            </div>
            <div className='navbar__categories'>
                <ul>
                    <li className='homepage'>
                        <Link to="/">
                            <i class="fas fa-home"></i>
                            Ana Sayfa
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className='cart__link'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            
                            <span className='cartlogo__badge'>{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                {/*
                <li className='homepage'>
                    <Link to="/">
                        <i class="fas fa-home"></i>
                        Ana Sayfa
                    </Link>
                </li>
                 */}

            </ul>

            <div className='hamburger__menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}

export default Navbar
