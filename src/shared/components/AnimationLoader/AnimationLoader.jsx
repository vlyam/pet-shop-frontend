// АНИМИРОВАННЫЙ CSS-ЛОАДЕР: просто показываем и убираем когда нужно при загрузках
import styles from './AnimationLoader.module.css';

const AnimationLoader = () => {
    return (
        <div className={styles['animation-loader']}>
            <div className={styles['animation-loader__content']}>
                <div className={styles['animation-loader__animation']}></div>
                <div className={styles['animation-loader__text']}>Loading</div>
            </div>
        </div>
    );
};

export default AnimationLoader;