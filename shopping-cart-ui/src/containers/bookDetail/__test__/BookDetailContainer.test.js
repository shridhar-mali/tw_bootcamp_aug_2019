import React from 'react';
import {shallow} from "enzyme";
import BookDetail from "../../../components/book-details/BookDetail";
import BookDetailContainer from "../BookDetailContainer";
import {urls} from "../../../config/env-config";

describe("BookDetailContainer", () => {

    it("Should contains BookDetail", () => {
        let bookDetailContainer = shallow(<BookDetailContainer params={{bookId:1}}/>);
        expect(bookDetailContainer.find(BookDetail).length).toEqual(1);
    });

    it("Should make BookDetailController to call fetch method to get Book Detail", () => {

        let fetchSpy = jest.spyOn(global, 'fetch');

        shallow(<BookDetailContainer params={{bookId:1}}/>);

        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledWith(`${urls.bookDetail}1`);

        fetchSpy.mockReset();
    });

    it("Should set bookDetail data coming from book detail api in state", async () => {

        const mockJsonPromise = Promise.resolve({id:1,name: 'Book name'});
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });

        jest.spyOn(global, 'fetch')
            .mockImplementation(() => mockFetchPromise);

        let bookDetailWrapper = shallow(<BookDetailContainer params={{bookId:1}}/>);

        await bookDetailWrapper.instance().componentDidMount();

        expect(bookDetailWrapper.find(BookDetail).props().bookDetail).toEqual({id: 1, name: 'Book name'});
    });
});