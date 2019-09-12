import React from 'react';
import BookItem from "./bookitem/BookItem";

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderGrid() {
        return this.props.bookList.map((book, index) => {
            return <div key={index} className="col-auto"><BookItem book={book}/></div>
        });
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.renderGrid()}
                </div>
            </div>
        );
    }
}

export default Grid;
