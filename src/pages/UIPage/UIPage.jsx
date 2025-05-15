import { useState } from 'react';
import Title from '../../shared/components/Title/Title';
import Subtitle from '../../shared/components/Subtitle/Subtitle';
import Breadcrumbs from '../../modules/Breadcrumbs/Breadcrumbs';
import PageLayout from '../../shared/layouts/PageLayout/PageLayout';
import AnimationLoader from '../../shared/components/AnimationLoader/AnimationLoader';
import ErrorNotification from '../../shared/components/ErrorNotification/ErrorNotification';
import Button from '../../shared/components/Button/Button';
import BackToTopButton from '../../shared/components/BackToTopButton/BackToTopButton';
import Input from '../../shared/components/Input/Input';
import Checkbox from '../../shared/components/Checkbox/Checkbox';
import Select from '../../shared/components/Select/Select';
import Counter from '../../shared/components/Counter/Counter';
import Hamburger from '../../shared/components/Hamburger/Hamburger';
import HeaderCart from '../../shared/components/HeaderCart/HeaderCart';
import TextLabel from '../../shared/components/TextLabel/TextLabel';
import Modal from '../../shared/components/Modal/Modal';
import NavigationLink from '../../shared/components/NavigationLink/NavigationLink';
import CategoriesList from '../../modules/CategoriesList/CategoriesList';
import ProductsList from '../../modules/ProductsList/ProductsList';
import Filter from '../../modules/Filter/Filter';
import Form from '../../modules/Form/Form';
import NotFound from '../../modules/NotFound/NotFound';

import styles from './UIPage.module.css';

const UIPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    const handleSelectChange = () => {
        console.log('selected');
    };
    const handleFilterChange = () => {
        console.log('Filter changed');
    };
    const breadcrumbs = [
        { name: 'Main page', path: '/' },
        { name: 'Crumb 1', path: '/' },
        { name: 'Crumb 2', path: '/' },
        { name: 'Crumb 3', path: '/' },
        { name: 'Crumb 4', path: '/' },
        { name: 'Crumb 5' }
    ];
    const fields = [
        {
            name: 'fieldOne',
            type: 'text',
            placeholder: 'Field-1',
        },
        {
            name: 'fieldTwo',
            type: 'text',
            placeholder: 'Field-2',
        },
        {
            name: 'fieldThree',
            type: 'text',
            placeholder: 'Field-3',
        },
    ];

    return (
        <PageLayout
            title="UI-каталог"
        >
            <div className={styles['ui-page']}>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Заголовок - <strong>Title</strong>, подзаголовок - <strong>Subtitle</strong></p>
                    <Title>Заголовок</Title>
                    <Subtitle>Подзаголовок</Subtitle>
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Сообщение об ошибке - <strong>ErrorNotification</strong>, текст ошибки передается в пропс text</p>
                    <ErrorNotification text="This is Error!" />
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>CSS-анимированный лоадер - <strong>AnimationLoader</strong></p>
                    <AnimationLoader />
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Кнопка - <strong>Button</strong>, может быть как button, так и Link. Поддерживает кастомизацию: ширина, состояние "добавлено в корзину"</p>
                    <div className={styles['ui-page__item-row']}>
                        <Button >Кнопка</Button>
                        <Button added>Кнопка Added</Button>
                        <Button fullWidth>Кнопка fullWidth</Button>
                    </div>
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Кнопка возврата наверх - <strong>BackToTopButton</strong>, позиционирование position = BottomRight, BottomLeft, TopRight, TopLeft</p>
                    <div className={styles['ui-page__item-row']}>
                        <BackToTopButton />
                    </div>
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Текстовая надпись - <strong>TextLabel</strong></p>
                    <TextLabel>Текст</TextLabel>
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Инпут - <strong>Input</strong></p>

                    <div className={styles['ui-page__item-scroll']}>
                        <Input placeholder='input' />
                        <Input placeholder='disabled' disabled />
                    </div>
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Чекбокс - <strong>Checkbox</strong></p>
                    <div className={styles['ui-page__item-scroll']}>
                        <Checkbox />
                        <Checkbox checked disabled />
                    </div>
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Селект - <strong>Select</strong></p>
                    <div className={styles['ui-page__item-scroll']}>
                        <Select onChange={handleSelectChange}>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                            <option value="">Option 4</option>
                        </Select>
                        <Select onChange={handleSelectChange} disabled>
                            <option value="">Disabled</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                            <option value="">Option 4</option>
                        </Select>
                    </div>

                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Счетчик - <strong>Counter</strong>, с ограничениями min/max и начальным значением</p>
                    <Counter initial={1} min={0} max={5} />
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Гамбургер - <strong>Hamburger</strong></p>
                    <Hamburger />
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Корзина - <strong>HeaderCart</strong></p>
                    <HeaderCart />
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Модальное окно - <strong>Modal</strong>, закрытие по фону, Escape и при клике на крестик</p>
                    <Button onClick={handleModalOpen}>Открыть</Button>
                    {isModalOpen && (
                        <Modal close={handleModalClose}>
                            <h3>Hi!</h3>
                            <p>This is modal window</p>
                        </Modal>
                    )}
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Ссылка навигации - <strong>NavigationLink</strong>, для заголовоков секций главной страницы</p>
                    <NavigationLink label='Текст' />
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Модуль хлебных крошек - <strong>Breadcrumbs</strong>, по массиву объектов items, формируется в соответствии с микроразметкой Schema.org</p>
                    <div className={styles['ui-page__item-scroll']}>
                        <Breadcrumbs items={breadcrumbs} />
                    </div>
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Модуль фильтров - <strong>Filter</strong></p>
                    <div className={styles['ui-page__item-row']}>
                        <div className={styles['ui-page__item-scroll']}>
                            <Filter priceFrom priceTo salesOnly sort onChange={handleFilterChange} />
                        </div>
                    </div>
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Модуль списка категорий - <strong>CategoriesList</strong>, поддерживает параметр ограничения количества элементов limit</p>
                    <CategoriesList limit={4} />
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Модуль списка продуктов - <strong>CategoriesList</strong>, поддерживает параметр ограничения количества элементов limit</p>
                    <ProductsList limit={4} />
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Модуль конструктора форм - <strong>Form</strong>, цветовые темы colorTheme = dark, light, принимает пропс fields с набором полей</p>
                    <Form
                        fields={fields}
                        successText="Успешно"
                        errorText="Ошибка"
                        buttonText="Button"
                        colorTheme="dark"
                    />
                </div>

                <div className={styles['ui-page__item']}>
                    <p className={styles['ui-page__item-title']}>Модуль 404 - <strong>NotFound</strong></p>
                    <NotFound />
                </div>



            </div>

        </PageLayout>
    );
};

export default UIPage;