import {shallow} from "enzyme";
import React from "react";
import Home from "../Home";

describe("Home", () => {
    it("Should render Home without crashing", () => {
        shallow(<Home/>)
    });
});
