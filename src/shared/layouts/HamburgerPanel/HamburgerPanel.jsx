import contacts from '../../constants/contacts';
import MobileNav from '../../components/MobileNav/MobileNav';

import styles from './HamburgerPanel.module.css';

const HamburgerPanel = ({ onClose }) => {
    return (
        <div className={styles['hamburger-panel']}>
            <div className={styles['hamburger-panel__lines']}>
                <div className={styles['hamburger-panel__line']}>
                    <MobileNav onClose={onClose} />
                </div>
                <div className={styles['hamburger-panel__line']}>
                    <div className={styles['hamburger-panel__contact']}>
                        <a className={styles['hamburger-panel__link']} href={`tel:${contacts.phoneLink}`}>
                            {contacts.phone}
                        </a>
                    </div>
                    <div className={styles['hamburger-panel__contact']}>
                        {contacts.address}
                    </div>
                    <div className={styles['hamburger-panel__contact']}>
                        <ul className={styles['hamburger-panel__social-list']}>
                            {contacts.socialItems.map(({ id, href, icon }) => (
                                <li key={id} className={styles['hamburger-panel__social-li']}>
                                    <a className={styles['hamburger-panel__social-button']} href={href} target="_blank" rel="noopener noreferrer">{icon}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles['hamburger-panel__close']} onClick={onClose} />
        </div>
    );
};

export default HamburgerPanel;