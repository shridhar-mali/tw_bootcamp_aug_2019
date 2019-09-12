import {mount, shallow} from 'enzyme';
import React from 'react';
import OrderDetails from '../OrderDetails'
import {urls} from "../../../config/env-config";

describe('order-details', () => {

    let fetchSpy, comp;

    beforeEach(() => {
        const mockJsonPromise = Promise.resolve({success: true});
        const mockFetchPromise = Promise.resolve({
            json: () => {
                return mockJsonPromise;
            }
        });
        fetchSpy = jest.spyOn(global, 'fetch')
            .mockImplementation(() => mockFetchPromise);

        comp = shallow(<OrderDetails bookType={'hardCopy'} bookId={100}/>);
    });

    afterEach(() => {
        fetchSpy.mockReset();
    });

    it('should create component', () => {
        expect(comp).toBeTruthy();
    });

    it('should have a form component', () => {
        expect(comp.find('form').length).toEqual(1);
    });

    it('should have a name input field', () => {
        expect(comp.find('#inputName').length).toEqual(1);
    });

    it('should have a mobile input field', () => {
        expect(comp.find('#inputMobile').length).toEqual(1);
    });

    it('should have a email input field', () => {
        expect(comp.find('#inputEmail').length).toEqual(1);
    });

    it('should have a address input field', () => {
        expect(comp.find('#inputAddress').length).toEqual(1);
    });

    it('should have a pincode input field', () => {
        expect(comp.find('#inputPincode').length).toEqual(1);
    });

    it('should have a country input field', () => {
        expect(comp.find('#inputCountry').length).toEqual(1);
    });

    it('should have a buy button to order the book', () => {
        expect(comp.find('#buyButton').length).toEqual(1);
    });

    it('should call createOrder API when Submit button is clicked', () => {
        // Arrange
        jest.spyOn(global, 'alert').mockImplementation(jest.fn());

        let comp = mount(<OrderDetails bookType={"hardCopy"} bookId={100} parentCallback={() => 0}/>, {attachTo: document.body});
        comp.find('#inputName').simulate('change', {target: {value: 'Anon'}});
        comp.find('#inputMobile').simulate('change', {target: {value: '1234567890'}});
        comp.find('#inputEmail').simulate('change', {target: {value: 'anon@anon.com'}});
        comp.find('#inputAddress').simulate('change', {target: {value: 'New York'}});
        comp.find('#inputPincode').simulate('change', {target: {value: '200300'}});
        comp.find('#inputCountry').simulate('change', {target: {value: 'USA'}});

        // Act
        comp.find('#buyButton').simulate('click', {currentTarget: {checkValiditiy: () => true}});

        // Assert
        expect(fetchSpy).toBeCalledWith(urls.order, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bookId: 100,
                customerName: 'Anon',
                mobileNumber: '1234567890',
                emailAddress: 'anon@anon.com',
                customerAddress: 'New York',
                pincode: '200300',
                country: 'USA'
            })
        });
    })
});