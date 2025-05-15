import axios from './axiosInstance';

// возвращает объект категории, содержащий в т.ч. список продуктов (нужно для списка товаров конкретной категории)
export const fetchCategoryById = async (categoryId) => {
    const response = await axios.get(`/categories/${categoryId}`);
    return response.data;
};