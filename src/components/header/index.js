import React from 'react';
import './header.css';
import Avatar from '../../assets/img/avatar.png';

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">
                Hi, I'm Alina
            </h1>
            <img className="header__img" src={Avatar} alt="Just me"></img>
        </header>
    );
}
export default Header;