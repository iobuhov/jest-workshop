/**
 * Task:
 * Create a React component with an input field and a debounced change handler.
 *
 * 1. Use Jest mock timers to test the debounced change handler.
 * 2. Verify that the change handler is called only after the debounce delay.
 */

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
import { createElement, useCallback, useState } from "react";

export function DebouncedInput({ onChange }: { onChange: (value: string) => void }) {
    const [value, setValue] = useState("");

    const debouncedChangeHandler = useCallback(
        debounce((newValue: string) => {
            onChange(newValue);
        }, 300),
        []
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        debouncedChangeHandler(event.target.value);
    };

    return <input value={value} onChange={handleChange} />;
}

function debounce<F extends (...args: any[]) => any>(func: F, wait: number) {
    let timeout: number;
    return function (...args: Parameters<F>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

describe("DebouncedInput", () => {
    jest.useFakeTimers();
    let user: UserEvent;

    beforeEach(() => {
        user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    });

    afterEach(() => {
        user = null!;
    });

    test("calls onChange after debounce delay", async () => {
        /** Your code goes here */
    });
});
