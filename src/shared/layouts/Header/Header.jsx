import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import HeaderCart from '../../components/HeaderCart/HeaderCart';
import Hamburger from '../../components/Hamburger/Hamburger';
import HamburgerPanel from '../HamburgerPanel/HamburgerPanel';

import useBodyClass from '../../hooks/useBodyClass';

import styles from './Header.module.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showFixedHeader, setShowFixedHeader] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    useBodyClass('body__no-scroll', menuOpen);

    useEffect(() => {
        const threshold = 250; //Расстояние от верха, после прокрутки которого появитс фикисированный хедер

        const handleScroll = () => {
            setShowFixedHeader(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderHeaderContent = () => (
        <div className={styles['header__container']}>
            <Link to="/" className={styles['header__logo']}></Link>
            <Nav />
            <HeaderCart />
            <div className={styles['header__hamburger']}>
                <Hamburger onClick={toggleMenu} />
            </div>
        </div>
    );

    return (
        <>
            <header className={styles['header']}>
                {renderHeaderContent()}
                <div className={`${styles['header__hamburger-panel']} ${menuOpen ? styles['header__hamburger-panel--show'] : ''}`}>
                    <HamburgerPanel onClose={closeMenu} />
                </div>
            </header>
            <div className={`${styles['fixed-header']} fh ${showFixedHeader ? styles['fixed-header--visible'] : ''}`}>
                {renderHeaderContent()}
            </div>
        </>
    );
};

export default Header;