import React from 'react';
import searchIcon from '../../assets/icons/search-outline.svg'
import './products-section.css'
import ProductCategories from '../product-categories/ProductCategories';
import Products from '../products/Products';

const ProductsSection = () => {
    return (
        <section className='products-section'>
            <div className="header">
                <h1>Explore our Products</h1>
                <form className='product-search-form'>
                    <div className='input-container'>
                        <span className='icon'>
                            <img src={searchIcon} alt="" />
                        </span>
                        <input type="text" placeholder='Search product'/>
                        <button>Search</button>
                    </div>
                </form>
            </div>
            <div className="products-outer-wrapper">
                <ProductCategories />
                <Products />
            </div>
        </section>
    );
};

export default ProductsSection;