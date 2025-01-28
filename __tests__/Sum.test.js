import React from "react";
import "@testing-library/jest-dom";

function sum(a, b) {
    return a + b;
}

describe("Sum", () => {
  it("should render sum component", () => {
    expect(sum(2, 4)).toBe(6);
  });
});
