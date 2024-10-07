/**
 * Task:
 * Add more test cases that will break the function.
 *
 * 1. Fix the spec by adding test function.
 * 2. Add more test cases to "break" the function.
 */

import { Calculator } from "./exercise4/Calculator.js";

describe("Calculator", () => {
    it.each([
        [5, 2, 3],
        [2, 2, 0]
    ])(".subtract(%i, %i)" /* Your code goes here */);
});
