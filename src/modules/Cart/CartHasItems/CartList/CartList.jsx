import CartItem from './CartItem/CartItem';
import styles from './CartList.module.css';

const CartList = ({ items, onRemove, onQuantityChange }) => (
    <div className={styles['cart__list']}>
        {items.map((item) => (
            <CartItem
                key={item.id}
                item={item}
                onRemove={onRemove}
                onQuantityChange={onQuantityChange}
            />
        ))}
    </div>
);

export default CartList;