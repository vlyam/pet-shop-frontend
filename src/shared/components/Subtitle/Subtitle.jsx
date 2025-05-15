// ПОДЗАГОЛОВОК: поддерживает выравнивание по центру
import styles from './Subtitle.module.css';

const Subtitle = ({ children, alignCenter = false }) => {
    const className = `${styles.subtitle}${alignCenter ? ` ${styles['subtitle--align-center']}` : ''}`;
    return <p className={className}>{children}</p>;
};

export default Subtitle;