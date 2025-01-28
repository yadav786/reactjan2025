import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Contact } from "../src/Contact";

describe("<Contact />", () => {
  it("should render Contact component", () => {
    render(<Contact />);
    const element = screen.getByText("Contact");
    expect(element).toBeInTheDocument();
  });
});