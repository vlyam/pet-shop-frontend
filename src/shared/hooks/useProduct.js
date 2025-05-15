import { useEffect, useState } from 'react';
import { fetchProductById } from '../api/product';

// функция для загрузки одного продукта по ID
export const useProduct = (id) => {
    const [product, setProduct] = useState(null); // состояние для хранения продукта
    const [loading, setLoading] = useState(true); // состояние для отслеживания процесса загрузки
    const [error, setError] = useState(false); // состояние для отслеживания ошибок загрузки

    // useEffect срабатывает при изменении ID (зависимость в конце)
    useEffect(() => {
        // асинхронная функция для загрузки продукта
        const loadProduct = async () => {
            setLoading(true); // перед запросом включается компонент загрузки с собачкой
            try {
                // запрос к api и извлечение первого элемента из массива
                const response = await fetchProductById(id);
                setProduct(response?.[0] ?? null); // если продукт есть — сохраняем, иначе null
                setError(false); // сбрасываем ошибку, если всё прошло успешно
            } catch (err) {
                // если ошибка — логируем и устанавливаем флаг ошибки
                console.error('Product loading error:', err);
                setError(true);
                setProduct(null); // на всякий случай очищаем данные
            } finally {
                setLoading(false); // вне зависимости от результата, завершаем загрузку
            }
        };

        // запускаем загрузку только если передан валидный ID
        if (id) loadProduct();
    }, [id]); // зависимость — ID продукта

    // возвращаем состояние продукта, загрузки и ошибки
    return { product, loading, error };
};
