/**
 * Task:
 * Mock `getData()` function from  `api.js` module.
 *
 * 1. Mock the `api.js` module in your test file and verify that `getData` is called correctly.
 */

import { getData } from "./api";

/** You code goes here */
/** HINT: use jest.mock */

describe("getData", () => {
    test("should be mocked correctly", () => {
        expect(getData()).toBe("mock data");
    });
});
