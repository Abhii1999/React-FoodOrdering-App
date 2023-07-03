import {Fragment} from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
            <h1>ReactMeals</h1>
            </header>
            <HeaderCartButton />
        </Fragment>
    );
}

export default Header;