import { Link } from 'react-router-dom';
import Counter from '../../../../../shared/components/Counter/Counter';
import axiosInstance from '../../../../../shared/api/axiosInstance';
import styles from './CartItem.module.css';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
    const imageUrl = `${axiosInstance.defaults.baseURL}${item.image}`;
    const price = item.discont_price || item.price;
    const oldPrice = item.discont_price ? item.price : null;

    return (
        <div className={styles['cart__item']}>
            <div className={styles['cart__item-thumbnail']}>
                <img src={imageUrl} alt={item.title} />
            </div>
            <div className={styles['cart__item-information']}>
                <div className={styles['cart__item-header']}>
                    <Link to={`/products/${item.id}`} className={styles['cart__item-title']}>
                        {item.title}
                    </Link>
                    <div className={styles['cart__item-remove-button']} onClick={() => onRemove(item.id)}></div>
                </div>
                <div className={styles['cart__item-body']}>
                    <Counter
                        initial={item.quantity}
                        onChange={(quantity) => onQuantityChange(item.id, quantity)}
                        max={1000}
                    />
                    <div className={styles['cart__item-prices']}>
                        <div className={styles['cart__item-current-price']}>
                            ${(price * item.quantity).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')}
                        </div>
                        {oldPrice && (
                            <div className={styles['cart__item-old-price']}>
                                ${(oldPrice * item.quantity).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;