// ССЫЛКА ДЛЯ СЕКЦИЙ НА ГЛАВНОЙ СТРАНИЦЕ
import { Link } from 'react-router-dom';
import styles from './NavigationLink.module.css';

const NavigationLink = ({ to, label }) => (
    <Link to={to} className={styles['navigation-link']}>
        {label}
    </Link>
);

export default NavigationLink;