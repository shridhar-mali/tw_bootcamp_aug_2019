import React from 'react';

class Navbar extends React.Component {

    render() {
        return (<header className="sticky-top">
            <nav className="navbar navbar-dark bg-primary">
                <a href="/" className="navbar-brand"><h3>The Alchemists Bookshop</h3></a>
            </nav>
        </header>);
    }
}

export default Navbar;