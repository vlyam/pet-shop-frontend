// НАВИГАЦИЯ ДЛЯ МОБИЛЬНОГО МЕНЮ: данные берутся из menuItems, содержит микроразметку
import { NavLink } from 'react-router-dom';
import menuItems from '../../constants/menuItems';
import styles from './MobileNav.module.css';

const MobileNav = ({ onClose }) => {
    return (
        <ul
            className={styles['mobile-nav__list']}
            itemScope
            itemType="http://schema.org/SiteNavigationElement"
        >
            {menuItems.map(({ id, href, text }) => (
                <li key={id} className={styles['mobile-nav__item']}>
                    <NavLink
                        to={href}
                        className={({ isActive }) =>
                            `${styles['mobile-nav__item-link']} ${isActive ? 'active' : ''}`
                        }
                        itemProp="url"
                        onClick={onClose} // Закрываем меню при клике
                    >
                        {text}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default MobileNav;