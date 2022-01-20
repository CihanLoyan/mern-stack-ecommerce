import './ProductScreen.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails, getProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = ({ match, history }) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cart`);
    };

    return (
        <div className='productscreen'>
            {loading ? (
                <span></span>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen__left">
                        <div className="left__image">
                            <img src={product.imageUrl} />
                        </div>
                        <div className="left__info">
                            <p className="left__name">{product.name}</p>
                            <p className='left__price'>Fiyat:
                                <span>    {product.price} TL </span>
                            </p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="productscreen__right">
                        <div className="right__info">
                            <p className='right__price'>
                                Fiyat:
                                <span>{product.price} TL</span>
                            </p>
                            <p>
                                Stok:
                                <span className={product.countInStock > 0 ? "green" : "red"}>
                                    {product.countInStock > 0 ? "Mevcut" : "Tükendi"}
                                </span>
                            </p>
                            <p>
                                <span className='right__count'>Miktar</span>
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                            </p>
                            <p className='add__to__cart'>
                                <button type="button" className='addToCart' onClick={addToCartHandler}>
                                    <span>Sepete Ekle</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductScreen;
