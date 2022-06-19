// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <div>
            <div className='Header'>
                <h2>Call a Friend</h2>
                <p>Your friendly contact app</p>
            </div>
        </div>
    )
}

export default Header;