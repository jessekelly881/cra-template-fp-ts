import { render, screen } from "@testing-library/react";
import App from "..";

test("renders learn react link", () => {
    render(App());
    const bodyEl = screen.getByText(/cra-template-fp-ts/i);
    expect(bodyEl).toBeInTheDocument();
});
