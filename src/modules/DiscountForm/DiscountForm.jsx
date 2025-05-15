import { useState } from 'react';
import Title from '../../shared/components/Title/Title';
import Form from '../Form/Form';
import Modal from '../../shared/components/Modal/Modal';

import styles from './DiscountForm.module.css';

const DiscountForm = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const fields = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      required: true,
      errorMessage: 'Enter your name'
    },
    {
      name: 'phone',
      type: 'text',
      placeholder: 'Phone number',
      required: true,
      pattern: {
        value: /^\+?[0-9\s\-()]{7,20}$/,
        message: 'Invalid number'
      },
      errorMessage: 'Enter your phone number'
    },
    {
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Incorrect email'
      },
      errorMessage: 'Enter email'
    }
  ];

  return (
    <>
      <div className={styles['discount-form']}>
        <Title tag="h2" colorLight alignCenter>
          5% off on the first order
        </Title>
        <div className={styles['discount-form__content']}>
          <div className={styles['discount-form__illustration']}>
            <img src="/images/discount-form-image.png" alt="5% off on the first order" />
          </div>
          <div className={styles['discount-form__form']}>
            <Form
              fields={fields}
              buttonText="Get a discount"
              successText="Your request has been sent successfully."
              errorText="Request error, please try again later."
              colorTheme="light"
              onSuccess={() => setModalOpen(true)}
            />
          </div>
        </div>
      </div>

      {modalOpen && (
        <Modal close={() => setModalOpen(false)}>
          <h3>Congratulations!</h3>
          <p>Your discount request has been submitted. We’ll get back to you soon!</p>
        </Modal>
      )}
    </>
  );
};

export default DiscountForm;