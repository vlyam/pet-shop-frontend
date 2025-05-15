import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import useProductFilters from '../../shared/hooks/useProductFilters';
import Breadcrumbs from '../../modules/Breadcrumbs/Breadcrumbs';
import PageLayout from '../../shared/layouts/PageLayout/PageLayout';
import Filter from '../../modules/Filter/Filter';
import ProductsList from '../../modules/ProductsList/ProductsList';

const CategoryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { filters, updateFilters } = useProductFilters();
    const [loading, setLoading] = useState(true);
    const categories = useSelector((state) => state.categories.items);
    const category = categories.find((cat) => String(cat.id) === id);

    useEffect(() => {
        if (!categories.length) return; // категории еще не загрузились
        if (!category) navigate('/404', { replace: true }); // категория не найдена - переход на 404
    }, [categories, category, navigate]);

    const handleLoadingChange = useCallback((value) => { //Чтобы не перерисовывалось каждый раз
        setLoading(value);
    }, []);

    const breadcrumbs = [
        { name: 'Main page', path: '/' },
        { name: 'Categories', path: '/categories' },
        category && { name: category.title }
    ].filter(Boolean);

    // Заголовок устанавливаем только если категория найдена, иначе "Загрузка..."
    const pageTitle = category ? category.title : 'Loading...';

    return (
        <PageLayout
            title={pageTitle}
            breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
            filters={
                <Filter
                    onChange={updateFilters}
                    loading={loading}
                    priceFrom
                    priceTo
                    salesOnly
                    sort
                    currentFilters={filters}
                />
            }
        >
            <ProductsList categoryId={id} filters={filters} onLoadingChange={handleLoadingChange} />
        </PageLayout>
    );
};

export default CategoryPage;