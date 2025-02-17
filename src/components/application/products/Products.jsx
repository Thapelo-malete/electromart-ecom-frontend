import React from 'react';
import ProductCard from '../product-card/ProductCard';
import './products.css'

const Products = () => {
    return (
        <div className='products'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default Products;