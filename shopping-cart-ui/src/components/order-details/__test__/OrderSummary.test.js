import {shallow} from 'enzyme';
import React from 'react';
import OrderSummary from "../OrderSummary";

describe('order-summary', () => {

    let summaryComponent;
    let summaryComponentWihCountry;
    beforeEach(() => {
        let bookDetail = {
            "id": 56,
            "name": "The Dark Tower VII",
            "imageUrl": "http://books.google.com/books/content?id=Geq0uKAxZPEC&printsec=frontcover&img=1&zoom=5",
            "price": 639,
            "authors": [
                "Stephen King"
            ],
            "description": "The final installment in the epic series completes the quest of Roland Deschain who works to outmaneuver the increasingly desperate acts of his adversaries and confronts losses within his circle of companions.",
            "reviews": [],
            "rating": 0
        };

        let addressDetail = {
            "address":"Koregoan street, Pune, India"
        };


        summaryComponent = shallow(<OrderSummary bookDetail={bookDetail} addressDetail={addressDetail}/>);

        summaryComponentWihCountry = shallow(<OrderSummary bookDetail={bookDetail} addressDetail={{
            "address": "Koregoan street, Pune, India",
            "country": "India"
        }}/>);
    });

    afterEach(() => {
        //fetchSpy.mockReset();
    });

    it('should contain OrderBookItem component', () => {
        expect(summaryComponent.find('OrderBookItem')).toHaveLength(1);
    });

    it('should contain bill-detail component', () => {
        expect(summaryComponent.find("div[id='bill-detail']")).toHaveLength(1);
        expect(summaryComponent.find("div[id='bill-detail']").text()).toBe('Bill DetailsBook Price:$639Delivery Charge:$50Total Amount:$689');
    });

    it('should contain bill-detail component with correct delivery charge', () => {
        expect(summaryComponent.find("div[id='bill-detail']")).toHaveLength(1);
        expect(summaryComponent.find("div[id='bill-detail']").text()).toContain('Bill DetailsBook Price:$639Delivery Charge:$50Total Amount:$689');

        expect(summaryComponentWihCountry.find("div[id='bill-detail']")).toHaveLength(1);
        expect(summaryComponentWihCountry.find("div[id='bill-detail']").text()).toContain('Bill DetailsBook Price:$639Delivery Charge:$50Total Amount:$689');
    });

});