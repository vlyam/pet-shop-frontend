import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/cart/cart-slice';
import { selectCartItemIds } from '../../../redux/cart/cart-selectors';
import Button from '../../../shared/components/Button/Button';
import axiosInstance from '../../../shared/api/axiosInstance';
import styles from './ProductElement.module.css';

const ProductElement = ({ id, title, image, price, discont_price }) => {
    const dispatch = useDispatch();
    const cartItemIds = useSelector(selectCartItemIds);
    const isAdded = cartItemIds.includes(id);

    const hasDiscount = discont_price && discont_price < price;
    const discountPercent = hasDiscount
        ? Math.round(100 - (discont_price / price) * 100)
        : null;

    const handleAddToCart = (event) => {
        event.preventDefault(); // иначе переходит по ссылке
        dispatch(addToCart({
            id,
            title,
            price,
            discont_price,
            image,
            quantity: 1,
        }));
    };

    return (
        <Link
            to={`/products/${id}`}
            className={`${styles.product} ${isAdded ? styles['product--added'] : ''}`}
        >
            <div className={styles['product__head']}>
                <div className={styles['product__thumbnail']}>
                    <img src={`${axiosInstance.defaults.baseURL}${image}`} alt={title} />
                </div>
                <div className={styles['product__button-container']}>
                    <Button
                        fullWidth
                        onClick={!isAdded ? handleAddToCart : undefined}
                        added={isAdded}
                        disabled={isAdded}
                    >
                        {isAdded ? 'Added' : 'Add to cart'}
                    </Button>
                </div>
            </div>
            <div className={styles['product__information']}>
                <div className={styles['product__title']}>{title}</div>
                <div className={styles['product__prices']}>
                    <div className={styles['product__current-price']}>
                        ${hasDiscount ? discont_price : price}
                    </div>
                    {hasDiscount && (
                        <>
                            <div className={styles['product__old-price']}>${price}</div>
                            <div className={styles['product__sale']}>-{discountPercent}%</div>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductElement;