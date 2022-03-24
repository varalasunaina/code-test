import React from 'react';
import './Header.css';

const Header = () => {
    
    return (
        <header className="header">
            <section className="blue-background"></section>
            <nav className='nav'>
                <ul>
                    <li><a href=""> Home </a> </li>
                    <li><a href=""> Browse </a> </li>
                    <li><a href=""> Search </a> </li>
                    <li><a href=""> Invite </a> </li>
                    <li><a href=""> Film </a> </li>
                    <li><a href=""> Mail </a> </li>
                    <li><a href=""> Blog </a> </li>
                    <li><a href=""> Favorites </a> </li>
                    <li><a href=""> Forum </a> </li>
                    <li><a href=""> Groups </a> </li>
                    <li><a href=""> Events </a> </li>
                    <li><a href=""> Videos </a> </li>
                    <li><a href=""> Music </a> </li>
                    <li><a href=""> Classifieds </a> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
