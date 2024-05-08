import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Asegúrate de tener este archivo en tu proyecto

function Header() {
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);

    return (
        <header className="header">
            <div className="top-nav">
                <div className="logo">
                    <Link to="/">MegaMart</Link>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search essentials, groceries and more..." />
                    <button type="submit">🔍</button>
                </div>
                <div className="user-actions">
                    <button onClick={() => setUserMenuOpen(!isUserMenuOpen)} className="user-menu">
                        🔓 Sign Up/Sign In
                        {isUserMenuOpen && <div className="dropdown-content">User menu items...</div>}
                    </button>
                    <button onClick={() => setCartOpen(!isCartOpen)} className="cart">
                        🛒 Cart
                        {isCartOpen && <div className="dropdown-content">Cart items...</div>}
                    </button>
                </div>
            </div>
            <nav className="navbar">
                <Link to="/groceries" className="active">Groceries</Link>
                <Link to="/fruits">Premium Fruits</Link>
                <Link to="/home-kitchen">Home & Kitchen</Link>
                <Link to="/fashion">Fashion</Link>
                <Link to="/electronics">Electronics</Link>
                <Link to="/beauty">Beauty</Link>
                <Link to="/home-improvement">Home Improvement</Link>
                <Link to="/sports-toys">Sports, Toys & Luggage</Link>
            </nav>
        </header>
    );
}

export default Header;
