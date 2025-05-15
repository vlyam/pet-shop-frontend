import PageLayout from '../../shared/layouts/PageLayout/PageLayout';
import Cart from '../../modules/Cart/Cart';

const CartPage = () => {
    return (
        <PageLayout
            title="Shopping cart"
            headerNavigation={{ to: '/categories', label: 'Back to the store' }}
        >
            <Cart />
        </PageLayout>
    );
};

export default CartPage;