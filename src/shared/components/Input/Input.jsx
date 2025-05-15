// БАЗОВОЕ ТЕКСТОВОЕ ПОЛЕ: контролируется через набор пропсов
import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, value, onChange, onKeyDown, disabled }) => (
    <input
        className={styles['input']}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
    />
);

export default Input;