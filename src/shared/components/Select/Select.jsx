// КАСТОМНЫЙ SELECT: анимация стрелочки через onMouseDown и onBlur
import { useState } from 'react';
import styles from './Select.module.css';

const Select = ({ value, onChange, disabled, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles['select-wrapper']} ${isOpen ? styles.open : ''}`}>
            <select
                className={styles['select']}
                value={value}
                onChange={(event) => { //Передаем родителю
                    setIsOpen(false);
                    onChange(event);
                }}
                onMouseDown={() => setIsOpen(true)} // Повернуть стрелку
                onBlur={() => setIsOpen(false)} // Вернуть стрелку назад
                disabled={disabled}
            >
                {children}
            </select>
        </div>
    );
};

export default Select;