import React from "react";
import renderer, { act } from "react-test-renderer";
import Loading from "../../screens/Loading";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("Loading Screen", () => {
  it("renders without crashing", () => {
    jest.useFakeTimers();
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <Loading />
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
