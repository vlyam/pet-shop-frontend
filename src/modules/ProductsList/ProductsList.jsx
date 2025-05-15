// Отображает товары и применяет фильтры к товарам:
// загружает все (или категорийные) товары,
// применяет к ним фильтрацию и сортировку по значениям из пропса filters (может получать их как из фильтров, так и установлыенные вручную),
// т.е. физически фильтрует товары по значениям из filters и отображает товары после фильтрации и сортировки
import { useEffect, useState } from 'react';
import ProductElement from './ProductElement/ProductElement';
import AnimationLoader from '../../shared/components/AnimationLoader/AnimationLoader';
import ErrorNotification from '../../shared/components/ErrorNotification/ErrorNotification';
import { fetchAllProducts } from '../../shared/api/products';
import { fetchCategoryById } from '../../shared/api/category';

import styles from './ProductsList.module.css';

const ProductsList = ({ categoryId = null, limit = null, filters = {}, onLoadingChange }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Дефолтные значения фильтров
    const { minPrice = 0, maxPrice = Infinity, sortBy = null, salesOnly = false } = filters;

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            onLoadingChange?.(true); // сообщаем родителю
            try {
                let data;
                if (categoryId) {
                    // Если есть categoryId, получаем только товары для этой категории
                    const categoryData = await fetchCategoryById(categoryId);
                    data = categoryData.data || []; // Обрабатываем только поле data
                } else {
                    // Если нет categoryId, получаем все товары
                    data = await fetchAllProducts();
                }

                // Копия массива
                let filteredData = [...data];

                // Фильтр по распродажам
                if (salesOnly) {
                    filteredData = filteredData.filter(product => product.discont_price !== null);
                }

                // Фильтры по цене
                const validMin = typeof minPrice === 'number' && !isNaN(minPrice);
                const validMax = typeof maxPrice === 'number' && !isNaN(maxPrice);

                if (validMin) {
                    filteredData = filteredData.filter(
                        product => (product.discont_price || product.price) >= minPrice
                    );
                }

                if (validMax) {
                    filteredData = filteredData.filter(
                        product => (product.discont_price || product.price) <= maxPrice
                    );
                }

                // Сортировка
                if (sortBy === 'bydefault' || !sortBy) {
                    // Если сортировка по умолчанию или пустое значение, ничего не делать
                } else if (sortBy === 'newest') {
                    filteredData.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );
                } else if (sortBy === 'pricehighlow') {
                    filteredData.sort(
                        (a, b) => (b.discont_price || b.price) - (a.discont_price || a.price)
                    );
                } else if (sortBy === 'pricelowhigh') {
                    filteredData.sort(
                        (a, b) => (a.discont_price || a.price) - (b.discont_price || b.price)
                    );
                }

                // Ограничение по количеству
                if (limit) {
                    filteredData = filteredData.slice(0, limit);
                }

                setProducts(filteredData);
            } catch (err) {
                console.error('Error loading products:', err);
                setError(true);
            } finally {
                setLoading(false);
                onLoadingChange?.(false); // сообщаем родителю
            }
        };

        loadProducts();
    }, [categoryId, limit, minPrice, maxPrice, sortBy, salesOnly, onLoadingChange]);

    if (loading) return <AnimationLoader />;
    if (error) return <ErrorNotification text="Error loading products" />;

    // Если нет товаров после фильтрации, показываем заглушку
    if (products.length === 0) {
        return <div className={styles['products__no-products']}>There are no products matching the selected filters.</div>;
    }

    return (
        <div className={styles.products}>
            <div className={styles['products__list']}>
                {products.map(product => (
                    <div key={product.id} className={styles['products__element']}>
                        <ProductElement
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            discont_price={product.discont_price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;