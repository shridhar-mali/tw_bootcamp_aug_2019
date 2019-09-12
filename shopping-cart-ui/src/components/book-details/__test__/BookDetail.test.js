import React from 'react';
import {shallow} from "enzyme";
import BookDetail from "../../../components/book-details/BookDetail";
import OrderDetails from "../../order-details/OrderDetails";

describe("BookDetail", () => {

    it("Should return single div when bookdetail is not given", () => {
        let bookDetail = shallow(<BookDetail/>);
        expect(bookDetail.find('div').length).toEqual(2);
    });

    it("should open Order page when Buy Now button is clicked", () => {
        let bookDetail = shallow(<BookDetail bookDetail={{
            "id": 1,
            "name": "Cracking the Coding Interview",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg",
            "price": 599,
            "authors": [
                "Martin Fowler"
            ],
            "description": "189 Programing Questions and Solutions",
            "reviews": [
                "Good",
                "Good Book"
            ],
            "rating": 0
        }}/>);
        let buyNowButton = bookDetail.find('button');

        buyNowButton.simulate('click');

        expect(OrderDetails)
    })
});