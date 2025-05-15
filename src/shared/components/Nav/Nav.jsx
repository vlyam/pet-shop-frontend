// НАВИГАЦИЯ ДЛЯ ДЕСКТОПА: тот же список, что в MobileNav, но для хедера
import { NavLink } from 'react-router-dom';
import menuItems from '../../constants/menuItems';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles['nav']}>
            <ul className={styles['nav__list']} itemScope itemType='http://schema.org/SiteNavigationElement'>
                {menuItems.map(({ id, href, text }) => (
                    <li key={id} className={styles['nav__item']}>
                        <NavLink to={href} className={`${styles['nav__item-link']} fh__item-link`} itemProp='url'>
                            {text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;