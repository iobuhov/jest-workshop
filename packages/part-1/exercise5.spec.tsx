/**
 * Task:
 * Create a function `fetchData(callback)` that calls the provided callback with some data.
 *
 * 1. Write a test case using a mock function to verify that the callback is called with the correct data.
 */

function fetchData(callback: (result: "data") => void): void {
    callback("data");
}

describe("fetchData", () => {
    test("calls the callback with correct data", () => {
        /** Your code goes here */
    });
});
