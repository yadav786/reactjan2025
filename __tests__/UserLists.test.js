import 'whatwg-fetch'
import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { UserLists } from "../src/UserLists";

describe("<UserLists />", () => {
  
  beforeAll(function(){
    jest.spyOn(window, 'fetch');
  });

  it("should render User Lists component", async () => {
    jest.spyOn(window, 'fetch').mockImplementation(() => {
        return Promise.resolve(
            { 
                json: () => Promise.resolve([{id: 1, name: 'Pankaj'}]) 
            }
        )
    });
    const { findByText } = render(<UserLists />);
    const listNode = await findByText('Pankaj');
    expect(listNode).toBeInTheDocument();
  });
});