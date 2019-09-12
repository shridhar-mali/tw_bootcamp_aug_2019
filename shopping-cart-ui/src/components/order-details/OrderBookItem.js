import React from 'react';
import TrimService from "../../services/Trim";
import "./OrderSummary.css"

class OrderBookItem extends React.Component {

    render() {
        const bookDetail = this.props.bookDetail;
        return (
            <div className="row">
                <div className="col-auto">
                    <img className="image-summary" src={bookDetail.imageUrl} alt="..."/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="text-left">
                        <h4>{TrimService.addEllipsis(bookDetail.name, 50)}</h4>
                        <p className="author-text text-muted">{TrimService.addEllipsis(bookDetail.authors.join(', '), 20)}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderBookItem;