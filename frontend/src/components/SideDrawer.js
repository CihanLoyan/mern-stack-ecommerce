import './SideDrawer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ({ show, click }) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    const sideDrawerClass = ["sidedrawer"];

    if (show) {
        sideDrawerClass.push("show");
    }

    return <div className={sideDrawerClass.join(" ")}>
        <ul className='sidedrawer__links' onClick={click}>
            <li>
                <Link to="/cart">
                    <i className='fas fa-shopping-cart'></i>
                    <span>
                        Sepetim<span className='sidedrawer__cartbadge'>{getCartCount()}</span>
                    </span>
                </Link>
            </li>

            <li>
                <Link to="/">
                    Ana Sayfa
                </Link>
            </li>

        </ul>
    </div>
}

export default SideDrawer
