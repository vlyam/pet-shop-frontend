import axios from './axiosInstance';

//получить продукт по ID
export const fetchProductById = async (productId) => {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
};