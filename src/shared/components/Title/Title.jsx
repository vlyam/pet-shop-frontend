// ЗАГОЛОВОК: с кастомным тегом, цветом и выравниванием
import styles from './Title.module.css';

const Title = ({ children, tag = 'h1', colorLight = false, alignCenter = false }) => {
    const Tag = (tag === 'h1' || tag === 'h2') ? tag : 'h1';

    const className = [
        styles.title,
        colorLight && styles['title--color-light'],
        alignCenter && styles['title--align-center']
    ].filter(Boolean).join(' ');

    return <Tag className={className}>{children}</Tag>;
};

export default Title;