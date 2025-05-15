import Button from '../../../shared/components/Button/Button';
import styles from './CartNoItems.module.css';

const CartNoItems = () => (
    <div className={styles['cart__no-items']}>
        <p>Looks like you have no items in your basket currently.</p>
        <Button to='/categories'>Continue Shopping</Button>
    </div>
);

export default CartNoItems;