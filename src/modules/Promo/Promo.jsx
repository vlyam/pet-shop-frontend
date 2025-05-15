import Button from '../../shared/components/Button/Button';
import styles from './Promo.module.css';

const Promo = ({ title='Title', backgroundImage, to='/', buttonText= 'Click me' }) => {
    return (
        <section className={styles.promo} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles['promo__container']}>
                <h1 className={styles['promo__title']}>{title}</h1>
                <Button to={to}>{buttonText}</Button>
            </div>
        </section>
    );
};

export default Promo;