import React from 'react';
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <>
            <header className={classes.header}>Ricky and Morty </header>
            {props.children}
            <footer className={classes.header}>Copyright Abdul-Qudus</footer>
        </>
    )
}

export default Layout;