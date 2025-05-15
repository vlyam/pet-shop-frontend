import { createSelector } from '@reduxjs/toolkit'; //Мемоизация для selectCartItemIds чтобы не было перерендеров

// получить все товары из корзины (для корзины и списка товаров для POST-отправки формы)
export const selectCartItems = (state) => state.cart.items;

// получить общее количество товаров (для "Order details" в форме корзины)
export const selectCartItemCount = (state) =>
  state.cart.items.reduce((acc, item) => acc + item.quantity, 0);

// получить итоговую сумму всех товаров с учетом скидки (для "Order details" в форме корзины)
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((acc, item) => acc + item.quantity * (item.discont_price || item.price), 0);

// получить ID всех товаров в корзине (для элемента списка чтобы отобразить активную кнопку)
export const selectCartItemIds = createSelector(  //Мемоизация, иначе сыпятся предупреждеия
  [selectCartItems],
  (items) => items.map((item) => item.id)
);

// получить количество конкретного товара по ID (для детальной страницы)
export const selectCartItemQuantityById = (state, id) => {
  const item = state.cart.items.find((item) => item.id === id);
  return item ? item.quantity : 0;
};