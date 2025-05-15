// ИКОНКА ГАМБУРГЕРА В ХЕДЕРЕ: вызывает мобильное меню
import styles from './Hamburger.module.css';

const Hamburger = ({ onClick }) => {
    return (
        <button type="button" className={styles['hamburger']} onClick={onClick} aria-label="Open menu">
            <span className={styles['hamburger__line']}></span>
            <span className={styles['hamburger__line']}></span>
            <span className={styles['hamburger__line']}></span>
        </button>
    );
};

export default Hamburger;
