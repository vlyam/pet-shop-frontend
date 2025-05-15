import { useState, useCallback } from 'react';
import useProductFilters from '../../shared/hooks/useProductFilters';
import Breadcrumbs from '../../modules/Breadcrumbs/Breadcrumbs';
import PageLayout from '../../shared/layouts/PageLayout/PageLayout';
import Filter from '../../modules/Filter/Filter';
import ProductsList from '../../modules/ProductsList/ProductsList';

const AllSalesPage = () => {
    const [loading, setLoading] = useState(true);
    const { filters, updateFilters } = useProductFilters();

    const handleLoadingChange = useCallback((value) => { //Чтобы не перерисовывалось каждый раз
        setLoading(value);
    }, []);

    const breadcrumbs = [
        { name: 'Main page', path: '/' },
        { name: 'All sales' }
    ];

    return (
        <PageLayout
            title="Discounted items"
            breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
            filters={
                <Filter
                    onChange={updateFilters}
                    loading={loading}
                    priceFrom
                    priceTo
                    sort
                    currentFilters={filters}
                />
            }
        >
            <ProductsList
                filters={{ ...filters, salesOnly: true }}
                onLoadingChange={handleLoadingChange}
            />
        </PageLayout>
    );
};

export default AllSalesPage;