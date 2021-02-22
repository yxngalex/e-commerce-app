import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';

import './navbar.styles.scss';

const Navbar = () => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
        </div>
    </div>
)

export default Navbar;