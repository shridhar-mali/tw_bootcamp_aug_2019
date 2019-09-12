import React from 'react';
import OrderBookItem from "./OrderBookItem";

class OrderSummary extends React.Component {

    render() {
        const bookDetail = this.props.bookDetail;
        const country = this.props.country;
        const deliveryType = this.props.bookType;

        return <div className="mt-5 ml-5">
            <h3>Order Summary</h3>
            <hr/>
            <OrderBookItem bookDetail={bookDetail}/>
            <div className="my-4" id="bill-detail">{this.getBillDetails(deliveryType, country, bookDetail)}</div>
        </div>
    }

    getBillDetails(deliveryType, country, bookDetail) {
        if (deliveryType === 'ebook') {
            return this.getBillDetailsHTMLElements(bookDetail.ebookPrice, "N/A", bookDetail.ebookPrice);
        } else {
            let deliveryCharge = 50;
            if (country === 'India') {
                deliveryCharge = 20;
            }

            return this.getBillDetailsHTMLElements(bookDetail.price, `$${deliveryCharge}`, bookDetail.price + deliveryCharge);
        }
    }

    getBillDetailsHTMLElements(bookPrice, deliveryCharge, totalAmount) {

        return <div>
            <strong><mark>Bill Details</mark></strong>
            <table className="table table-sm my-3">
                <tbody>
                <tr>
                    <td>Book Price</td>
                    <td>:</td>
                    <td><strong>${bookPrice}</strong></td>
                </tr>
                <tr>
                    <td>Delivery Charge</td>
                    <td>:</td>
                    <td><strong>{deliveryCharge}</strong></td>
                </tr>
                <tr>
                    <td>Total Amount</td>
                    <td>:</td>
                    <td><strong>${totalAmount}</strong></td>
                </tr>
                </tbody>
            </table>
        </div>
    }
}

export default OrderSummary