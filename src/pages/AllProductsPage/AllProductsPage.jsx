import { useState, useCallback } from 'react';
import useProductFilters from '../../shared/hooks/useProductFilters';
import Breadcrumbs from '../../modules/Breadcrumbs/Breadcrumbs';
import PageLayout from '../../shared/layouts/PageLayout/PageLayout';
import Filter from '../../modules/Filter/Filter';
import ProductsList from '../../modules/ProductsList/ProductsList';

const AllProductsPage = () => {
    const [loading, setLoading] = useState(true);
    const { filters, updateFilters } = useProductFilters();

    const handleLoadingChange = useCallback((value) => { //Чтобы не перерисовывалось каждый раз
        setLoading(value);
    }, []);

    const breadcrumbs = [
        { name: 'Main page', path: '/' },
        { name: 'All products' }
    ];

    return (
        <PageLayout
            title="All products"
            breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
            filters={<Filter onChange={updateFilters} loading={loading} priceFrom priceTo salesOnly sort currentFilters={filters} />}
        >
            <ProductsList
                filters={filters}
                onLoadingChange={handleLoadingChange}
            />
        </PageLayout>
    );
};

export default AllProductsPage;