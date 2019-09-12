import React from 'react';
import OrderSummary from "./OrderSummary";
import OrderDetails from "./OrderDetails";
import {urls} from "../../config/env-config";
import Faq from "./Faq";

class OrderDetailController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            country:"India"
        };
    }

    async componentDidMount() {
        await fetch(`${urls.bookDetail}${this.props.params.bookId}`)
            .then(response => response.json())
            .then(bookDetail => this.setState({bookDetail: bookDetail}))
            .catch((e)=> {
                alert(e);
            });
    }

    countryUpdateCallback = (country) => {
        this.setState({country: country})
    };

    render() {

        const query = new URLSearchParams(this.props.location.search);
        const bookDetail = this.state.bookDetail;
        if(bookDetail) {
            return <div className='container my-3'>
                <div className="row">
                    <div className="col"><OrderDetails  bookType={query.get('type')} bookId={this.props.params.bookId} parentCallback={this.countryUpdateCallback}/></div>
                    <div className="col"><OrderSummary bookDetail={bookDetail} country={this.state.country} bookType={query.get('type')}/></div>
                </div>
                <div className="row">
                    <col-12><div className="col"><Faq /></div></col-12>
                </div>
            </div>;
        } else {
            return <div className="mx-auto" id="spinner">
                <div className="spinner-border center" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>;
        }
    }
}

export default OrderDetailController;