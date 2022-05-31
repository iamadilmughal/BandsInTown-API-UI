import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import React from "react";
import "../../enzyme.config";
import SearchArtists from "../components/SearchArtists";
import App from "../pages/App";

// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

test("It should render the query element initially", () => {
    render(<App />);
    const queryElement = screen.getByTestId("data-test-query");
    expect(queryElement).toBeInTheDocument();
});

test("It should not render anything if empty query was given", () => {
    render(<App />);
    const fakeEvent = { preventDefault: () => console.log("preventDefault") };
    const appComponent = shallow(<App />);
    expect(<SearchArtists onSearch={() => {}} />).toBeInTheDocument();
    appComponent.find("#query").simulate("submit", fakeEvent);
    expect(appComponent.find("#artist-detail")).not.toBeInTheDocument();
});
