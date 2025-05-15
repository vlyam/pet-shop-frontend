import Title from '../../components/Title/Title';
import NavigationLink from '../../components/NavigationLink/NavigationLink';
import styles from './PageLayout.module.css';

const PageLayout = ({
    title,
    headerNavigation = null,
    breadcrumbs = null,
    filters = null,
    children
}) => {
    return (
        <div className={styles['page']}>
            <div className={styles['page__container']}>

                {breadcrumbs && (
                    <div className={styles['page__breadcrumbs']}>
                        {breadcrumbs}
                    </div>
                )}

                {title && (
                    <div className={styles['page__header']}>
                        <Title>{title}</Title>
                        {headerNavigation && (
                            <div className={styles['page__header-navigation']}>
                                <NavigationLink to={headerNavigation.to} label={headerNavigation.label} />
                            </div>
                        )}
                    </div>
                )}

                {filters && (
                    <div className={styles['page__filters']}>
                        {filters}
                    </div>
                )}

                <div className={styles['page__main']}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PageLayout;