import Grid from "./../Grid"
import { shallow } from "enzyme";
import React from "react";

describe("Grid Info", () => {
    let gridComponent, bookList, renderGridSpy;
    beforeEach(() => {
        bookList = [{
            name: "Java",
            authors: ["Martin", "Robert"],
            price: 600.0
        }];
        renderGridSpy = jest.spyOn(Grid.prototype, 'renderGrid');
        gridComponent = shallow(<Grid bookList={bookList} />);
    });


    it("should render Grid", () => {
        expect(gridComponent).toBeDefined();
    });

    it("should render grid", () => {
        expect(renderGridSpy).toHaveBeenCalledTimes(2);
    });

});
