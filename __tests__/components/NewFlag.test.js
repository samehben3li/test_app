import React from "react";
import renderer, { act } from "react-test-renderer";
import { NewFlag } from "../../components";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("NewFlag Component", () => {
  it("renders without crashing", () => {
    jest.useFakeTimers();
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <NewFlag />
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
