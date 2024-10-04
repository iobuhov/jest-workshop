/**
 * Task:
 * Write a simple spec using `describe` and `it` for
 * our `Calculator` class.
 * Use "What"->"with/when"->"behavior" style to write the test.
 * IMPORTANT: Implement Calculator.sum method only *after* writing a test.
 */

interface ICalculator {
    add(a: number): number;
    add(a: number, b: number): number;
    add(...args: number[]): number;
}

class Calculator implements ICalculator {}
