import { useForm } from 'react-hook-form';
import { useState } from 'react';
import FormTextfield from './FormTextfield/FormTextfield';
import FormButton from './FormButton/FormButton';
import FormNotification from './FormNotification/FormNotification';
import axios from '../../shared/api/axiosInstance';
import styles from './Form.module.css';

const Form = ({ fields, buttonText, successText, errorText, colorTheme, onSuccess, dataToSend }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [success, setSuccess] = useState(false);
    const [serverError, setServerError] = useState('');

    const isDisabled = submitting || (submitted && success);

    const onSubmit = async (data) => {
        setSubmitting(true);
        setSubmitted(false);
        setSuccess(false);
        setServerError('');
        try {
            const readyData = dataToSend ? dataToSend(data) : data;
            await axios.post('/sale/send', readyData);
            setSuccess(true);
            setSubmitted(true);
            onSuccess?.();
            reset();
            console.log(readyData);
        } catch (error) {
            console.error('Form submission error:', error);
            setSuccess(false);
            setSubmitted(true);
            setServerError(errorText || 'Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['form__textfields']}>
                {fields.map((field) => (
                    <FormTextfield
                        key={field.name}
                        {...field}
                        register={register}
                        error={errors[field.name]}
                        colorTheme={colorTheme}
                        disabled={isDisabled}
                    />
                ))}
            </div>

            <FormButton
                disabled={isDisabled}
                loading={submitting}
                submitted={submitted && success}
                colorTheme={colorTheme}
            >
                {submitted && success ? 'Request submitted' : buttonText}
            </FormButton>

            {submitted && (
                <FormNotification type={success ? 'success' : 'error'}>
                    {success ? successText : serverError}
                </FormNotification>
            )}
        </form>
    );
};

export default Form;