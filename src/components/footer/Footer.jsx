import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="subscribe">
                <h1>Subscribe to get latest on sales</h1>
                <form action="">
                    <div className="input-control">
                        <input type="text" placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </form>
            </div>
            <div className="important-links">
                <div className="important-links-container">
                    <h1>Important links</h1>
                    <ul className="links">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Shop</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='contact'>
                <h1>Contact</h1>
                <p>+27 72 461 2356</p>
                <p>thapelomalet066@gmail</p>
            </div>
        </footer>
    );
};

export default Footer;