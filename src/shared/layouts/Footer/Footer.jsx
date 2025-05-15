import Title from '../../components/Title/Title';
import contacts from '../../constants/contacts';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__container']}>
                <Title tag="h2">Contact</Title>
                <div className={styles['footer__information']}>
                    <address className={styles['footer__contacts']}>
                        <div className={styles['footer__contact']}>
                            <div className={styles['footer__contact-label']}>Phone</div>
                            <div className={styles['footer__contact-value']}>
                               <a href={`tel:${contacts.phone.replace(/\D/g, '')}`}>{contacts.phone}</a>
                            </div>
                        </div>
                        <div className={styles['footer__contact']}>
                            <div className={styles['footer__contact-label']}>Socials</div>
                            <div className={styles['footer__contact-value']}>
                                <ul className={styles['footer__social-list']}>
                                    {contacts.socialItems.map(({ id, href, icon }) => (
                                        <li key={id} className={styles['footer__social-li']}>
                                            <a className={styles['footer__social-button']} href={href} target="_blank" rel="noopener noreferrer">{icon}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={styles['footer__contact']}>
                            <div className={styles['footer__contact-label']}>Address</div>
                            <div className={styles['footer__contact-value']}>
                                {contacts.address}
                            </div>
                        </div>
                        <div className={styles['footer__contact']}>
                            <div className={styles['footer__contact-label']}>Working Hours</div>
                            <div className={styles['footer__contact-value']}>
                                {contacts.workingHours}
                            </div>
                        </div>
                    </address>
                    <div className={styles['footer__map']}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.0194822764197!2d13.401467999108236!3d52.5113853842362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27dade5561%3A0x2454d91ffab308fa!2zV2FsbHN0cmHDn2UgOS0xMywgMTAxNzkgQmVybGluLCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1744959279945!5m2!1sru!2sru"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;