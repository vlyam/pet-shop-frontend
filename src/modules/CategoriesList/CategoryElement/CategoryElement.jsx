import { Link } from 'react-router-dom';
import axiosInstance from '../../../shared/api/axiosInstance';
import styles from './CategoryElement.module.css';

const CategoryElement = ({ id, title, image }) => {
  return (
    <div className={styles['categories__element']}>
      <Link className={styles['category']} to={`/categories/${id}`}>
        <div className={styles['category__thumbnail']}>
          <img src={`${axiosInstance.defaults.baseURL}${image}`} alt={title} />
        </div>
        <div className={styles['category__title']}>{title}</div>
      </Link>
    </div>
  );
};

export default CategoryElement;