import { Badge } from '@mui/material';
import shoppingCart from '../../assets/icons/shopping-cart.svg'
import favourite from '../../assets/icons/heart.svg'
import search from '../../assets/icons/search-outline.svg'
import profile from '../../assets/icons/user.svg'
import './navigation-bar.css'

const NavigationBar = () => {
    return (
        <nav className='top-navigation-bar'>
            <a href="" className="logo">
                <h1>
                    ElectroMart
                </h1>
            </a>
            <ul className="navigation-links">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/">Shop</a></li>
                <li className="nav-item"><a href="/">About</a></li>
                <li className="nav-item"><a href="/">Contact</a></li>
            </ul>
            <ul className="nav-user-links">
                <li className='nav-user-item'>
                    <button>
                        <img src={ search } alt="Search icon" />
                    </button>
                </li>
                <li className="nav-user-item">
                    <a href="/">
                        <img src={favourite} alt="favoutite icon" />
                    </a>
                </li>
                <li className="nav-user-item">
                    <a href="/">
                        <Badge badgeContent={4} color="primary">
                            <img src={shoppingCart} alt="shopping cart icon" />
                        </Badge>
                    </a>
                </li>
                <li className="nav-user-item">
                    <a href="/">
                        <img src={profile} alt="profile icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;