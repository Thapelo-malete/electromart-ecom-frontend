import React from 'react';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import Hero from '../../components/hero/Hero';
import ProductsSection from '../../components/products-section/ProductsSection';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <>
            <NavigationBar />
            <Hero />
            <ProductsSection />
            <Footer />
        </>
    );
};

export default Home;