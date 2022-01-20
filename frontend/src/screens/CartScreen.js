import './CartScreen.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem';

import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) => price + item.price * item.qty, 0)
            .toFixed(2);
    };

    return <div className='cartscreen'>
        <div className='cartscreen__left'>
            <h2>Alışveriş Sepetim</h2>
            {cartItems.map((item) =>
                <CartItem item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler} />
            )}
        </div>

        <div className='cartscreen__right'>
            <div className='cartscreen__info'>
                <p>Toplam ({getCartCount()}) Ürün</p>
                <p>{getCartSubTotal()} TL</p>
            </div>
            <div>
                <button>Ödemeye Devam Et</button>
            </div>
        </div>
    </div>
}

export default CartScreen;
