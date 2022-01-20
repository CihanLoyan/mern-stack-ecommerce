import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ productId, name, price, description, imageUrl }) => {
    return (
        <div className='product'>
            <div className="product__image">
                <img src={imageUrl} />
            </div>
            <div className='product__info'>
                <p className='info__name'>{name}</p>
                <p className='info__price'>{price} TL</p>
                {/*<p className='info__description'>{description}</p>*/}
                <Link to={`/product/${productId}`} className='info__button'>
                    Görüntüle
                </Link>
            </div>
        </div>
    )
}

export default Product
