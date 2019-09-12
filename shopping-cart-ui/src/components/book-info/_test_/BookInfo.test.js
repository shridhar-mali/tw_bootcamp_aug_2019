import BookInfo from "./../BookInfo"
import { shallow } from "enzyme";
import React from "react";

describe("Book Info", () => {
    let bookInfoComponent, bookInfo;
    beforeEach(() => {
        bookInfo = {
            name: "Java",
            authors: ["Martin", "Robert"],
            price: 600.0
        };
        bookInfoComponent = shallow(<BookInfo bookInfo={bookInfo} />)
    });
    it("Should render bookinfo", () => {
        expect(bookInfoComponent).toBeDefined();

    });

    it("should render book info", () => {
        let bookName = bookInfoComponent.find("div").find("h5");
        let authorsName = bookInfoComponent.find("div").find(".author-text");
        let price = bookInfoComponent.find("div").find(".price-text");
        expect(bookName.text()).toBe(bookInfo.name);
        expect(authorsName.text()).toBe(bookInfo.authors.join(', '));
        expect(price.text()).toBe('$' + bookInfo.price);
    });
});
