import axios from './axiosInstance';

// получение всех продуктов
export const fetchAllProducts = async () => {
  const response = await axios.get('/products/all');
  return response.data;
};