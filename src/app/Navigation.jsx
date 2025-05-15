import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import CategoriesPage from '../pages/CategoriesPage/CategoriesPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import AllProductsPage from '../pages/AllProductsPage/AllProductsPage';
import AllSalesPage from '../pages/AllSalesPage/AllSalesPage';
import CartPage from '../pages/CartPage/CartPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import UIPage from '../pages/UIPage/UIPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:id" element={<CategoryPage />} />
      <Route path="/all-products" element={<AllProductsPage />} />
      <Route path="/all-sales" element={<AllSalesPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/ui" element={<UIPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigation;