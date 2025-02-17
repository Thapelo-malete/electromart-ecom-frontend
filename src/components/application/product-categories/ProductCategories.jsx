import React from 'react';
import './product-category.css'

const ProductCategories = () => {
    return (
        <div className='product-categories'>
            <h3>Categories</h3>
            <div className="categories">
                <div className='category'>
                    <input type="radio" value="Category 1" id='category_1' name="category" />
                    <label htmlFor="category_1"> First category</label>
                </div>
                <div className='category'>
                    <input type="radio" value="Category 2" id='category_2' name='category' />
                    <label htmlFor="category_2"> First category</label>
                </div>
            </div>

        </div>
    );
};

export default ProductCategories;