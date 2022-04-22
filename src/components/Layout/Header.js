import React from 'react';

import classes from './Header.module.css';
import reactmeals from '../../assets/reactmeals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (  
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>

            <div className={classes['main-image']}>
                <img src={reactmeals} alt="react meals" />
            </div>
        </React.Fragment>
    );
}
 
export default Header;