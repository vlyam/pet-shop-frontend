import axios from './axiosInstance';

// возвращает все категории (нужно для получения списка категорий)
export const fetchAllCategories = async () => {
  const response = await axios.get('/categories/all');
  return response.data;
};