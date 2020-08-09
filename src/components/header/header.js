import React from 'react'
import SearchBar from './searchBar/SearchBar'
import LoginBar from './loginBar/loginBar';

function Header() {
    return (
        <div>
            <header className="row border-bottom">
                <LoginBar />
                <SearchBar />
            </header>
        </div>
    );
}

export default Header;



