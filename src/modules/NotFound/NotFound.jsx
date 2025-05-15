import Title from '../../shared/components/Title/Title';
import Subtitle from '../../shared/components/Subtitle/Subtitle';
import Button from '../../shared/components/Button/Button';

import styles from './NotFound.module.css';
import notFoundImage from '../../assets/not-found.png';

const NotFound = () => {
    return (
        <div className={styles['not-found']}>
            <div className={styles['not-found__illustration']}>
                <div className={styles['not-found__illustration-image-container']}>
                    <img src={notFoundImage} alt="Page Not Found" />
                </div>
            </div>
            <div className={styles['not-found__information']}>
                <Title alignCenter>Page Not Found</Title>
                <Subtitle alignCenter>
                    We’re sorry, the page you requested could not be found.
                    <br />
                    Please go back to the homepage.
                </Subtitle>
            </div>
            <Button to="/">Go Home</Button>
        </div>
    );
};

export default NotFound;