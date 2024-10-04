import { render } from "@testing-library/react";
import { createElement } from "react";

function Hi(props: { person: string }) {
    return <div>{`Hi ${props.person}!`}</div>;
}

describe("first exercise", () => {
    it("should render the component", () => {
        const { container } = render(<Hi person="Mom" />);
        expect(container).toMatchInlineSnapshot(`
            <div>
              <div>
                Hi Mom!
              </div>
            </div>
        `);
    });
});
