import styles from './FormErrorText.module.css';

const FormErrorText = ({ children, colorTheme }) => (
  <p className={`${styles['form__error-text']} ${styles[`form__error-text--color-theme-${colorTheme}`]}`}>
    {children}
  </p>
);

export default FormErrorText;