import React from "react";
import renderer, { act } from "react-test-renderer";
import Home from "../../screens/Home";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("Home Screen", () => {
  it("renders without crashing", () => {
    jest.useFakeTimers();
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <Home />
          </AuthProvider>
        </MockedProvider>
      )
      .toJSON();
    act(() => {
      jest.runAllTimers();
    });
    expect(rendered).toBeTruthy();
  });
});
