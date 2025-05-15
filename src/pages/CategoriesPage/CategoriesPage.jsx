import Breadcrumbs from '../../modules/Breadcrumbs/Breadcrumbs';
import PageLayout from '../../shared/layouts/PageLayout/PageLayout';
import CategoriesList from '../../modules/CategoriesList/CategoriesList';

const CategoriesPage = () => {
    const breadcrumbs = [
        { name: 'Main page', path: '/' },
        { name: 'Categories' }
    ];
    return (
        <PageLayout
            title="Categories"
            breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
        >
            <CategoriesList />
        </PageLayout>
    );
};

export default CategoriesPage;