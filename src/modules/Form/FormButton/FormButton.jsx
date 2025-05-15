import styles from './FormButton.module.css';

const FormButton = ({ children, disabled, loading, submitted, colorTheme }) => (
  <button
    type="submit"
    className={`${styles['form__button']} ${styles[`form__button--color-theme-${colorTheme}`]} ${loading ? styles['form__button--loading'] : ''} ${submitted ? styles['form__button--submitted'] : ''}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default FormButton;