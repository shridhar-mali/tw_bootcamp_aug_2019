import React from 'react';
import './BookDetails.css';
import {Link} from "react-router";
import BookReview from './BookReview'
import TrimService from "../../services/Trim";

const defaultType = 'hardCopy';

class BookDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            orderType: "hardCopy"
        }
    }

    static showProgress() {
        return <div className="mx-auto" id="spinner">
            <div className="spinner-border center" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    }

    onBookChange = (event) => {
        this.setState({orderType: event.target.value});
    };

    isHardCopy = () => this.state.orderType === defaultType;

    details() {
        const book = this.props.bookDetail;

        if (book) {
            return <div className="container mt-5 bg-white">
                <div className="row">
                    <div className="card book-detail-item m-3 shadow-sm">
                        <img src={book.imageUrl} className="card-img-top shadow-lg" alt="..."/>
                    </div>
                    <div className={"col-auto"}>
                        <div className="card-body text-left">
                            <h5 className="card-title">{TrimService.addEllipsis(book.name)}</h5>
                            <p className="card-text author-text">{TrimService.addEllipsis(book.authors.join(', '), 20)}</p>
                            <p className="price-text">
                                <strong>${this.isHardCopy() ? book.price : book.ebookPrice}</strong></p>
                            {/*<p className="price-text"><strong>${book.ebookPrice}</strong>*/}

                            <p className="rating-text">Rating - {book.rating} / 5</p>

                            <div>
                                <input type="radio" name="bookType" value="hardCopy" checked={this.isHardCopy()} onChange={this.onBookChange}/>
                                <strong className="ml-2"> Hard Copy </strong>
                                <input type="radio" name="bookType" value="ebook" className="ml-2" onChange={this.onBookChange}/> <strong
                                className="ml-2"> E-Book</strong>
                            </div>
                            <Link onlyActiveOnIndex={false} to={`/order/${book.id}?type=${this.state.orderType}`}>
                                <button className="btn btn-lg btn-primary mt-4" type="button">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-12">
                        <h5>Description</h5>
                        <hr/>
                        {book.description}
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-12">
                        <h5>Reviews</h5>
                        <hr/>
                        <BookReview reviews={book.reviews}/>
                    </div>
                </div>
            </div>;
        } else {
            return BookDetail.showProgress();
        }
    }

    render() {
        if (this.props.bookDetail) {
            return this.details();
        } else {
            return BookDetail.showProgress();
        }
    }
}

export default BookDetail;
