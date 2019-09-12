import React from 'react';
import {urls} from "../../config/env-config";

class OrderDetails extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            orderDetails: {
                bookId: props.bookId,
                customerName: '',
                mobileNumber: '',
                emailAddress: '',
                customerAddress: '',
                pincode: '',
                country: 'India'
            }
        };
    }

    renderBasedOnBookType(bookType) {
        if(bookType === 'hardCopy') {
            return(
                <>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <input type="text" pattern="[a-zA-Z][a-zA-Z ]+" required className="form-control"
                               id="inputName"
                               placeholder="Name"
                               value={this.state.orderDetails.customerName}
                               onChange={e => this.updateOrderDetail('customerName', e)}/>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" pattern="[0-9]{10}" required className="form-control"
                               id="inputMobile"
                               placeholder="10-digit mobile number"
                               value={this.state.orderDetails.mobileNumber}
                               onChange={e => this.updateOrderDetail('mobileNumber', e)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <input type="email" required className="form-control" id="inputEmail"
                               placeholder="Email address"
                               value={this.state.orderDetails.emailAddress}
                               onChange={e => this.updateOrderDetail('emailAddress', e)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <textarea rows="5" required className="form-control" id="inputAddress"
                                  placeholder="Address(Area and Street)"
                                  value={this.state.orderDetails.customerAddress}
                                  onChange={e => this.updateOrderDetail('customerAddress', e)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <input type="text" required className="form-control" id="inputPincode"
                               placeholder="Pincode"
                               value={this.state.orderDetails.pincode}
                               onChange={e => this.updateOrderDetail('pincode', e)}/>
                    </div>
                    <div className="col-sm-6">
                        <select className="form-control" id="inputCountry"
                                value={this.state.orderDetails.country}
                                onChange={e => {
                                    this.updateOrderDetail('country', e);
                                    this.props.parentCallback(e.target.value);
                                }}>
                            <option>India</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>
            </>
            )
        } else {
            return(
                <>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input type="email" required className="form-control" id="inputEmail"
                                   placeholder="Email address"
                                   value={this.state.orderDetails.emailAddress}
                                   onChange={e => this.updateOrderDetail('emailAddress', e)}/>
                        </div>
                    </div>
                </>
            )
        }
    }

    updateOrderDetail = (fieldName, e) => {


        let orderDetails = this.state.orderDetails;
        orderDetails[fieldName] = e.target.value;
        this.setState({
            orderDetails: orderDetails
        });
    };

    async createOrder() {

        let form = document.getElementById('orderForm');

        if (!form.checkValidity()) {
            form.reportValidity();
            return false;
        }

        try {
            let response = await fetch(urls.order, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    bookId: this.state.orderDetails.bookId,
                    customerName: this.state.orderDetails.customerName,
                    mobileNumber: this.state.orderDetails.mobileNumber,
                    emailAddress: this.state.orderDetails.emailAddress,
                    customerAddress: this.state.orderDetails.customerAddress,
                    pincode: this.state.orderDetails.pincode,
                    country: this.state.orderDetails.country
                })
            });
            let json = await response.json();
            alert(`Thank you ${this.state.orderDetails.customerName} for purchasing from us. Your Order ID is ${json.id}.`);
            window.location = '/';
        } catch (err) {
            alert('Sorry. An error occurred while submitting the order. Please try again.');
        }
    }

    render() {
        return <div className={'container my-3'}>
            <div className="row">
                <div className="col-12">
                    <h3 className="my-4">Enter delivery details</h3>
                    <hr/>
                    <form className="my-4" id="orderForm">
                        {this.renderBasedOnBookType(this.props.bookType)}
                        <button
                            type="button"
                            className="btn btn-primary btn-lg my-3"
                            id="buyButton"
                            onClick={this.createOrder.bind(this)}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>


        </div>
    }
}

export default OrderDetails;
