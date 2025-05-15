import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../shared/api/axiosInstance';
import Button from '../../shared/components/Button/Button';
import Counter from '../../shared/components/Counter/Counter';
import AnimationLoader from '../../shared/components/AnimationLoader/AnimationLoader';
import ErrorNotification from '../../shared/components/ErrorNotification/ErrorNotification';

import { addToCart } from '../../redux/cart/cart-slice';
import { selectCartItemQuantityById } from '../../redux/cart/cart-selectors';

import styles from './ProductDetail.module.css';

const ProductDetail = ({ product, loading, error }) => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => selectCartItemQuantityById(state, product?.id));
    const [counterValue, setCounterValue] = useState(1);
    const [showFullDescription, setShowFullDescription] = useState(false);

    if (loading) return <AnimationLoader />;
    if (error || !product) return <ErrorNotification text="Product not found" />;

    const imageUrl = `${axiosInstance.defaults.baseURL}${product.image}`;
    const hasDiscount = product.discont_price && product.discont_price < product.price;
    const discountPercent = hasDiscount
        ? Math.round(100 - (product.discont_price / product.price) * 100)
        : null;

    const handleAddToCart = () => {
        for (let i = 0; i < counterValue; i++) {
            dispatch(addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                discont_price: product.discont_price,
                image: product.image,
                quantity: counterValue,
            }));
        }
    };

    const description = product.description || '';
    const maxDescriptionLength = 680;
    const isDescriptionLong = description.length > maxDescriptionLength;
    const visibleDescription = showFullDescription || !isDescriptionLong
        ? description
        : description.slice(0, maxDescriptionLength) + '...';

    const isAdded = cartQuantity > 0;

    return (
        <div className={styles['product-detail']}>
            <div className={styles['product-detail__gallery']}>
                {/* <div className={styles['product-detail__gallery-thumbnails']}>
                    <div className={styles['product-detail__gallery-thumbnail']}>
                        <img src={imageUrl} alt={product.title} />
                    </div>
                </div> */}
                <div className={styles['product-detail__gallery-full-size']}>
                    <img src={imageUrl} alt={product.title} />
                </div>
            </div>

            <div className={styles['product-detail__information']}>
                <h1 className={styles['product-detail__title']}>{product.title}</h1>

                <div className={styles['product-detail__prices']}>
                    <div className={styles['product-detail__current-price']}>
                        ${hasDiscount ? product.discont_price : product.price}
                    </div>
                    {hasDiscount && (
                        <>
                            <div className={styles['product-detail__old-price']}>${product.price}</div>
                            <div className={styles['product-detail__sale']}>-{discountPercent}%</div>
                        </>
                    )}
                </div>

                <div className={styles['product-detail__actions']}>
                    <Counter onChange={setCounterValue} initial={1} min={1} max={10} />
                    <Button
                        fullWidth
                        onClick={handleAddToCart}
                        added={isAdded}
                    >
                        {isAdded
                            ? `Added (${cartQuantity})`
                            : 'Add to cart'}
                    </Button>
                </div>

                <div className={styles['product-detail__description']}>
                    <div className={styles['product-detail__description-title']}>Description</div>
                    <div className={styles['product-detail__description-text']}>
                        {visibleDescription}
                    </div>
                    {isDescriptionLong && !showFullDescription && (
                        <button
                            type="button"
                            onClick={() => setShowFullDescription(true)}
                            className={styles['product-detail__description-read-more-link']}
                        >
                            Read more
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;