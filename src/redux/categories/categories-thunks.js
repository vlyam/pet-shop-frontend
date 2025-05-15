import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCategories } from '../../shared/api/categories';

// асинхронный thunk для загрузки всех категорий
export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async () => {
    const data = await fetchAllCategories();
    return data;
  }
);