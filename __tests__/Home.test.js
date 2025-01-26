import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Home } from "../src/Home";

describe("<Home />", () => {
  it("should render component", () => {
    render(<Home />);
    const element = screen.getByText("Home");
    expect(element).toBeInTheDocument();
  });
});