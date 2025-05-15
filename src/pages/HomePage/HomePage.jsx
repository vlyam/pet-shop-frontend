import Promo from "../../modules/Promo/Promo";
import SectionLayout from "../../shared/layouts/SectionLayout/SectionLayout";
import CategoriesList from "../../modules/CategoriesList/CategoriesList";
import ProductsList from "../../modules/ProductsList/ProductsList";
import DiscountForm from "../../modules/DiscountForm/DiscountForm";


const HomePage = () => {
    return (
        <>
            <Promo title='Amazing Discounts on Pets Products!' backgroundImage='/public/images/promo.webp' to='/all-sales' buttonText='Check out' />
            <SectionLayout title="Categories" headerNavigation={{ to: '/categories', label: 'All categories' }}>
                <CategoriesList limit={4} />
            </SectionLayout>
            <SectionLayout>
                <DiscountForm />
            </SectionLayout>
            <SectionLayout title="Sale" headerNavigation={{ to: '/all-sales', label: 'All sales' }}>
                <ProductsList limit={4} filters={{salesOnly: true}}/>
            </SectionLayout>
        </>
    );
};

export default HomePage;