import { render, screen } from "@testing-library/react";
import React from "react";
import "../../enzyme.config";
import App from "../pages/App";

test("It should render the query element initially", () => {
    render(<App />);
    const queryElement = screen.getByTestId("data-test-query");
    expect(queryElement).toBeInTheDocument();
});

