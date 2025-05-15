import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/categories/categories-thunks';

import Header from "../shared/layouts/Header/Header";
import MainLayout from "../shared/layouts/MainLayout/MainLayout";
import Footer from "../shared/layouts/Footer/Footer";
import BackToTopButton from '../shared/components/BackToTopButton/BackToTopButton';

import Navigation from "./Navigation";

function App() {
  const dispatch = useDispatch();

  useEffect(() => { //При первом рендере грузим списко категорий с бека
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className='app'>
      <Header />
      <MainLayout>
        <Navigation />
      </MainLayout>
      <Footer />
      <BackToTopButton position='BottomRight'/>
    </div>
  )
}

export default App;