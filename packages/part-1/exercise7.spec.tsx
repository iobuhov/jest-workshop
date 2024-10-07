/**
 * Task:
 * Mock `randInt` method of `Chance` class.
 *
 * 1. Mock the `Chance` class in your test file and verify that `randInt` is called correctly.
 */

import { Chance } from "./Chance";

/** You code goes here */
/** HINT: use jest.mock & jest.mocked */

describe("Chance", () => {
    describe("randInt", () => {
        it("should be mocked correctly", () => {
            expect(new Chance().randInt()).toBe(37);
        });
    });
});
