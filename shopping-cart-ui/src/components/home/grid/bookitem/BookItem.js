import React from 'react';
import './BookItem.css';
import BookInfo from './../../../book-info/BookInfo';
import { Link } from "react-router";

class BookItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="card book-item m-3 shadow-sm">
                <Link onlyActiveOnIndex={false} to={`/book-detail/${this.props.book.id}`}>
                    <img src={this.props.book.imageUrl} className="card-img-top" alt="..." />
                </Link>
                <BookInfo bookInfo={this.props.book} />
            </div>
        );
    }
}

export default BookItem;
