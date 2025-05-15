// КОМПОНЕНТ BREADCRUMBS: принимает массив объектов items, каждый из которых описывает пункт хлебных крошек
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items = [] }) => {
  return (
    // Обертка хлебных крошек с микроразметкой schema.org для поисковых систем
    <div className={styles['breadcrumbs']} itemScope itemType="https://schema.org/BreadcrumbList"> 
      {items.map((item, index) => {
        const isLast = index === items.length - 1; // Проверка, последний ли это элемент
        const position = index + 1; // Позиция элемента в списке, нужна для микроразметки

        return (
          <div key={index} className={styles['breadcrumbs__element']} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {/* Если у элемента есть путь и он не последний — рендерим ссылку */}
            {item.path && !isLast ? (
              <Link to={item.path} className={styles['breadcrumbs__link']} itemProp="item" >
                <span itemProp="name">{item.name}</span>
                <meta itemProp="position" content={position} /> {/* Позиция для микроразметки */}
              </Link>
            ) : (
              <div className={styles['breadcrumbs__current']} itemProp="item">
                <span itemProp="name" className={styles['breadcrumbs__element-name']}>
                  {item.name}
                </span>
                <meta itemProp="position" content={position} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;