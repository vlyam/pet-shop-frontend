import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pet-shop-backend-e104.onrender.com',
});

export default axiosInstance;