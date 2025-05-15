import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemCount, selectTotalPrice } from '../../../redux/cart/cart-selectors';
import { removeFromCart, updateQuantity } from '../../../redux/cart/cart-slice';
import CartList from './CartList/CartList';
import CartOrderForm from './CartOrderForm/CartOrderForm';
import styles from './CartHasItems.module.css';

const CartHasItems = ({ items }) => {
    const dispatch = useDispatch();
    const totalCount = useSelector(selectCartItemCount);
    const totalPrice = useSelector(selectTotalPrice);

    const handleQuantityChange = (id, quantity) => {
        if (quantity === 0) {
            dispatch(removeFromCart(id));
        } else {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className={styles['cart__has-items']}>
            <CartList items={items} onRemove={handleRemove} onQuantityChange={handleQuantityChange} />
            <CartOrderForm totalCount={totalCount} totalPrice={totalPrice} />
        </div>
    );
};

export default CartHasItems;