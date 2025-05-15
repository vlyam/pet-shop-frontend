// ПОДПИСИ К ПОЛЯМ
import styles from './TextLabel.module.css';

const TextLabel = ({ children }) => (
    <div className={styles['text-label']}>{children}</div>
);

export default TextLabel;