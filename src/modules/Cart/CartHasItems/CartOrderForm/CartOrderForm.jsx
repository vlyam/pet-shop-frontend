import { useState } from 'react';
import Modal from '../../../../shared/components/Modal/Modal';
import Form from '../../../Form/Form';
import styles from './CartOrderForm.module.css';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../../redux/cart/cart-selectors';

import { useDispatch } from 'react-redux';
import { clearCart } from '../../../../redux/cart/cart-slice';

const CartOrderForm = ({ totalCount, totalPrice }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleModalClose = () => {
        setIsModalOpen(false);
        dispatch(clearCart());
    };

    const items = useSelector(selectCartItems);

    const fields = [
        {
            name: 'name',
            placeholder: 'Name',
            required: true,
            errorMessage: 'Name is required',
            type: 'text',
        },
        {
            name: 'phone',
            placeholder: 'Phone number',
            required: true,
            errorMessage: 'Phone number is required',
            type: 'text',
        },
        {
            name: 'email',
            placeholder: 'Email',
            required: true,
            errorMessage: 'Email is required',
            type: 'text',
        },
    ];

    const handleSuccess = () => {
        setIsModalOpen(true);
    };

    const finalData = (formData) => {
        return {
            ...formData,
            cart: items,
            totalCount,
            totalPrice,
        };
    };

    return (
        <>
            <div className={styles['cart__order-form']}>
                <div className={styles['cart__order-form-information']}>
                    <h2 className={styles['cart__order-form-title']}>Order details</h2>
                    <p className={styles['cart__order-form-number']}>{totalCount.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')} items</p>
                    <div className={styles['cart__order-form-total']}>
                        <p className={styles['cart__order-form-total-label']}>Total</p>
                        <p className={styles['cart__order-form-total-sum']}>${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')}</p>
                    </div>
                </div>

                <Form
                    fields={fields}
                    buttonText="Order"
                    successText="Your order has been sent successfully."
                    errorText="An error occurred while submitting the order. Please try again."
                    colorTheme="dark"
                    onSuccess={handleSuccess}
                    dataToSend={finalData}
                />
            </div>

            {isModalOpen && (
                <Modal close={handleModalClose}>
                    <h3>Congratulations!</h3>
                    <p>Your order has been successfully placed on the website.</p>
                    <p>A manager will contact you shortly to confirm your order.</p>
                </Modal>
            )}
        </>
    );
};

export default CartOrderForm;