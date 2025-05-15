import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useProduct } from '../../shared/hooks/useProduct';
import PageLayout from '../../shared/layouts/PageLayout/PageLayout';
import Breadcrumbs from '../../modules/Breadcrumbs/Breadcrumbs';
import ProductDetail from '../../modules/ProductDetail/ProductDetail';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(id);
  const categories = useSelector((state) => state.categories.items);

  useEffect(() => {
    if (!loading && !product) navigate('/404', { replace: true });
  }, [loading, product, navigate]);

  const category = categories.find(cat => cat.id === product?.categoryId);

  const breadcrumbs = [
    { name: 'Main page', path: '/' },
    { name: 'Categories', path: '/categories' },
    category && { name: category.title, path: `/categories/${category.id}` },
    product && { name: product.title }
  ].filter(Boolean);

  return (
    <PageLayout
      breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
    >
      <ProductDetail product={product} loading={loading} error={error} />
    </PageLayout>
  );
};

export default ProductPage;