// ИКОНКА КОРЗИНЫ В ХЕДЕРЕ: показывает количество товаров из Redux
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../../../redux/cart/cart-selectors';
import { Link } from 'react-router-dom';
import styles from './HeaderCart.module.css';

const HeaderCart = () => {
    const itemCount = useSelector(selectCartItemCount);

    return (
        <Link to="/cart" className={`${styles['header__cart']} fh__cart`}>
            {/* Отображаем число, только если товаров больше 0 */}
            {itemCount > 0 && (
                <span className={`${styles['header__cart-number']} fh__cart-number`}>
                    {itemCount}
                </span>
            )}
        </Link>
    );
};

export default HeaderCart;