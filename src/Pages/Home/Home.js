import React from 'react';
import Footer from '../Footer/Footer';
import ReviewCard from '../Review/ReviewCard';
import AboutCars from '../Shared/AboutCars/AboutCars';
import Article from '../Shared/Article/Article';
import ProductCard from '../Shared/ProductCard/ProductCard';
import Banner from './Banner';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProductCard></ProductCard>
      <AboutCars></AboutCars>
      <ReviewCard></ReviewCard>
      <Article></Article>
      <Footer></Footer>
    </div>
  );
};

export default Home;