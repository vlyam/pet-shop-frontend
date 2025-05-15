// UI фильтров: ввод цены, чекбокс скидки, сортировка.
// Вызывает onChange() при изменениях, т.е. updateFilters() в хуке useProductFilters через родительскую страницу
import { useState, useEffect } from 'react';

import TextLabel from '../../shared/components/TextLabel/TextLabel';
import Input from '../../shared/components/Input/Input';
import Checkbox from '../../shared/components/Checkbox/Checkbox';
import Select from '../../shared/components/Select/Select';

import styles from './Filter.module.css';

const Filter = ({ onChange, loading, priceFrom, priceTo, salesOnly, sort, currentFilters = {} }) => {
    const [minPrice, setMinPrice] = useState(currentFilters.minPrice || '');
    const [maxPrice, setMaxPrice] = useState(currentFilters.maxPrice || '');
    const [salesOnlyState, setSalesOnly] = useState(currentFilters.salesOnly || false);
    const [sortBy, setSortBy] = useState(currentFilters.sortBy || 'bydefault');

    useEffect(() => {
        setMinPrice(currentFilters.minPrice || '');
        setMaxPrice(currentFilters.maxPrice || '');
        setSalesOnly(currentFilters.salesOnly || false);
        setSortBy(currentFilters.sortBy || 'bydefault');
    }, [currentFilters]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onChange({
                minPrice: minPrice ? parseFloat(minPrice) : undefined,
                maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
                salesOnly: salesOnlyState,
                sortBy,
            });
        }
    };

    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSortBy(newSort);
        onChange({
            minPrice: minPrice ? parseFloat(minPrice) : undefined,
            maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
            salesOnly: salesOnlyState,
            sortBy: newSort,
        });
    };

    const handleCheckboxChange = () => {
        const newSalesOnly = !salesOnlyState;
        setSalesOnly(newSalesOnly);
        onChange({
            minPrice: minPrice ? parseFloat(minPrice) : undefined,
            maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
            salesOnly: newSalesOnly,
            sortBy,
        });
    };

    return (
        <>
            {(priceFrom || priceTo) && (
                <div className={styles.filter}>
                    <TextLabel>Price</TextLabel>
                    {priceFrom && (
                        <Input
                            type="number"
                            placeholder="from"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={loading}
                        />
                    )}
                    {priceTo && (
                        <Input
                            type="number"
                            placeholder="to"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={loading}
                        />
                    )}
                </div>
            )}

            {salesOnly !== undefined && (
                <div className={styles.filter}>
                    <TextLabel>Discounted items</TextLabel>
                    <Checkbox
                        checked={salesOnlyState}
                        onChange={handleCheckboxChange}
                        disabled={loading}
                    />
                </div>
            )}

            {sort !== undefined && (
                <div className={styles.filter}>
                    <TextLabel>Sorted</TextLabel>
                    <Select
                        value={sortBy}
                        onChange={handleSortChange}
                        disabled={loading}
                    >
                        <option value="bydefault">by default</option>
                        <option value="newest">newest</option>
                        <option value="pricehighlow">price: high-low</option>
                        <option value="pricelowhigh">price: low-high</option>
                    </Select>
                </div>
            )}
        </>
    );
};

export default Filter;