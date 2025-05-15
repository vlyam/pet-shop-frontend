// ПРОСТОЙ КАСТОМНЫЙ ЧЕКБОКС: Скрытый input и стилизованный span
import styles from './Checkbox.module.css';

const Checkbox = ({ checked, onChange, disabled }) => (
    <label className={styles['checkbox']}>
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
        />
        {/* Кастомная визуальная часть чекбокса */}
        <span className={styles['checkbox__button']}></span>
    </label>
);

export default Checkbox;