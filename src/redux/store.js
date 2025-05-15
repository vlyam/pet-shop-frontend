import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import categoriesReducer from './categories/categories-slice';
import cartReducer from './cart/cart-slice';

// persist для сохранения корзины в локалстораж
const cartPersistConfig = { 
  key: 'cart',
  storage,
};

// объединяем редюсеры
const rootReducer = combineReducers({ 
  categories: categoriesReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
});

// сздание хранилища (нужно для persist)
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// экспорт для persistGate
export const persistor = persistStore(store);
export default store;