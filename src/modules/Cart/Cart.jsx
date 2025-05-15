import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import CartNoItems from './CartNoItems/CartNoItems';
import CartHasItems from './CartHasItems/CartHasItems';
import styles from './Cart.module.css';

const Cart = () => {
    const items = useSelector(selectCartItems);

    return (
        <div className={styles.cart}>
            {items.length === 0 ? <CartNoItems /> : <CartHasItems items={items} />}
        </div>
    );
};

export default Cart;