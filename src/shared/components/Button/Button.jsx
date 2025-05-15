// УНИВЕРСАЛЬНАЯ КНОПКА: Может быть как <button>, так и <Link>. Поддерживает кастомизацию: ширина, состояние "добавлено в корзину" и текст.
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, to, onClick, type = 'button', fullWidth, added, ...props }) => {
    const classNames = [styles.button];

    // Добавляем модификатор для полной ширины
    if (fullWidth) {
        classNames.push(styles['button--full-width']);
    }

    // Добавляем модификатор, если товар уже добавлен
    const isAdded = Boolean(added);
    if (isAdded) {
        classNames.push(styles['button--added']);
    }

    // Если передан текст added (в корзине), отображаем его вместо children
    const displayText = typeof added === 'string' ? added : children;

    // Если передан to — рендерим ссылку
    if (to) {
        return (
            <Link to={to} className={classNames.join(' ')} {...props}>
                {displayText}
            </Link>
        );
    }

    // Иначе — обычная кнопка
    return (
        <button type={type} onClick={onClick} className={classNames.join(' ')} {...props}>
            {displayText}
        </button>
    );
};

export default Button;