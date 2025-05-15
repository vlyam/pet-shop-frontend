// СЧЕТЧИК КОЛИЧЕСТВА ТОВАРА: с ограничениями min/max и начальным значением
import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

const Counter = ({ onChange, initial = 1, min = 0, max }) => {
    // Корректировка начального значения
    const [count, setCount] = useState(() => {
        if (initial < min) return min;
        if (initial > max) return max;
        return initial;
    });

    // Уведомляем родителя при изменении
    useEffect(() => {
        onChange?.(count);
    }, [count, onChange]);

    const decrement = () => {
        if (count > min) {
            const newCount = count - 1;
            setCount(newCount);
            onChange?.(newCount);
        }
    };

    const increment = () => {
        if (count < max) {
            const newCount = count + 1;
            setCount(newCount);
            onChange?.(newCount);
        }
    };

    return (
        <div className={styles['counter']}>
            {/* Минус с дизейблом */}
            <div className={`${styles['counter__minus']} ${count === min ? styles['counter__minus--disabled'] : ''}`} onClick={decrement} />
            {/* Текущее значение */}
            <div className={styles['counter__current']}>{count}</div>
            {/* Плюс с дизейблом */}
            <div className={`${styles['counter__plus']} ${count === max ? styles['counter__plus--disabled'] : ''}`} onClick={increment} />
        </div>
    );
};

export default Counter;