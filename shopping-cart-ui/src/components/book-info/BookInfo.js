import React from 'react';
import './BookInfo.css';
import TrimService from './../../services/Trim';


class BookInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

 

    render() {
        return (
            <div className="card-body text-left">
                <h5 className="card-title" title={this.props.bookInfo.name}>{TrimService.addEllipsis(this.props.bookInfo.name,20)}</h5>
                <p className="card-text author-text">{TrimService.addEllipsis(this.props.bookInfo.authors.join(', '), 20)}</p>
                <p className="price-text"><strong>${this.props.bookInfo.price}</strong></p>
            </div>
        );
    }
}

export default BookInfo;
