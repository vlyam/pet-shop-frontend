import { useSelector } from 'react-redux';
import CategoryElement from './CategoryElement/CategoryElement';
import AnimationLoader from '../../shared/components/AnimationLoader/AnimationLoader';
import ErrorNotification from '../../shared/components/ErrorNotification/ErrorNotification';
import styles from './CategoriesList.module.css';

const CategoriesList = ({ limit = null }) => {
  const { items: categories, loading, error } = useSelector(state => state.categories);

  if (loading) return <AnimationLoader />;
  if (error) return <ErrorNotification text='Error loading categories' />;

  const visibleCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <div className={styles.categories}>
      <div className={styles['categories__list']}>
        {visibleCategories.map(category => (
          <div key={category.id} className={styles['categories__element']}>
            <CategoryElement
              id={category.id}
              title={category.title}
              image={category.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;