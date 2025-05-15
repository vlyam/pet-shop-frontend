import Title from '../../components/Title/Title';
import NavigationLink from '../../components/NavigationLink/NavigationLink';
import styles from './SectionLayout.module.css';

const SectionLayout = ({ title, headerNavigation, children }) => {
    return (
        <section className={styles.section}>
            <div className={styles['section__container']}>
                {title && (
                    <div className={styles['section__header']}>
                        <Title tag="h2">{title}</Title>
                        {headerNavigation && (
                            <div className={styles['section__header-navigation']}>
                                <NavigationLink
                                    to={headerNavigation.to}
                                    label={headerNavigation.label}
                                />
                            </div>
                        )}
                    </div>
                )}
                <div className={styles.section__main}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default SectionLayout;