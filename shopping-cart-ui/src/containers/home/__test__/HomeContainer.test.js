import React from "react";
import HomeContainer from "../HomeContainer";

describe("HomeContainer", () => {
    it("Should give Booklist from API", () => {
        new HomeContainer().fetchBookList()
    });
});