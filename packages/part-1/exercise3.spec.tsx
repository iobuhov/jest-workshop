/**
 * Task:
 * Create a test suite for a simple counter module. The counter module should have three functions: `increment`, `decrement`, and `reset`.
 *
 * 1. Use `beforeEach` to initialize the counter to 0 before each test.
 * 2. Use `afterEach` to log the current counter value after each test.
 * 3. Write tests to verify that `increment` increases the counter by 1, `decrement` decreases the counter by 1, and `reset` sets the counter to 0.
 */

let counter = 0;

const increment = () => counter++;
const decrement = () => counter--;
const reset = () => (counter = 0);

describe("Counter Module", () => {
    beforeEach(() => {
        /** Your code goes here */
    });

    afterEach(() => {
        /** Your code goes here */
    });

    test("increment should increase counter by 1", () => {
        /** Your code goes here */
    });

    test("decrement should decrease counter by 1", () => {
        /** Your code goes here */
    });

    test("reset should set counter to 0", () => {
        /** Your code goes here */
    });
});
