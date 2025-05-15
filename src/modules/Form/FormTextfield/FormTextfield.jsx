import FormErrorText from '../FormErrorText/FormErrorText';
import styles from './FormTextfield.module.css';

const FormTextfield = ({
    name,
    type,
    placeholder,
    required,
    pattern,
    register,
    error,
    colorTheme,
    disabled
}) => {
    return (
        <div className={`${styles['form__textfield']} ${styles[`form__textfield--color-theme-${colorTheme}`]}`}>
            <input
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                {...register(name, {
                    required: required && 'Required field',
                    pattern
                })}
            />
            {error && <FormErrorText colorTheme={colorTheme}>{error.message}</FormErrorText>}
        </div>
    );
};

export default FormTextfield;