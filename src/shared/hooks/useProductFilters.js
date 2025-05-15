// Управляет состоянием фильтров через URL: читет фильтры из URL-параметров, обновляет URL при изменении фильтров, формирует объект filters
import { useSearchParams } from 'react-router-dom';

const useProductFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const filters = {
        minPrice: parseFloat(searchParams.get('minPrice')) || 0,
        maxPrice: searchParams.get('maxPrice') !== null ? parseFloat(searchParams.get('maxPrice')) : undefined,
        salesOnly: searchParams.get('salesOnly') === 'true',
        sortBy: searchParams.get('sortBy') || 'bydefault',
    };

    const updateFilters = (newFilters) => {
        const updatedParams = {};

        if (newFilters.minPrice !== undefined && newFilters.minPrice !== null) {
            updatedParams.minPrice = newFilters.minPrice;
        }

        if (newFilters.maxPrice !== undefined && newFilters.maxPrice !== null) {
            updatedParams.maxPrice = newFilters.maxPrice;
        }

        if (newFilters.salesOnly === true) {
            updatedParams.salesOnly = true;
        }

        if (newFilters.sortBy && newFilters.sortBy !== 'bydefault') {
            updatedParams.sortBy = newFilters.sortBy;
        }

        setSearchParams(updatedParams);
    };

    return { filters, updateFilters };
};

export default useProductFilters;