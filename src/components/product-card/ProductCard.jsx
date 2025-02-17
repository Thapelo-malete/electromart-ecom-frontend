import React from 'react';
import image from "../../assets/images/iPhone_12_Pro_Gold_PDP_Image_Position-2__en-US_1.webp"
import { StarRateRounded } from '@mui/icons-material';
import './product-card.css'

const ProductCard = () => {
    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={image} alt="" />
            </div>
            <div className="product-content">
                <h3 className='product-title'>Product title</h3>
                <div className='reviews-price-container'>
                    <p className='reviews'>
                        <StarRateRounded className='rating-star'/>
                        <span className='rating'>5.0</span>
                        <a href="">(200)</a>
                    </p>
                    <p className="price">R21.54</p>
                </div>
                <div className="product-btn-container">
                    <button className='btn'>Add to Cart</button>
                    <a href="/" className='btn'>Buy Now</a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;