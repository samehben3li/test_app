import React from "react";
import renderer, { act } from "react-test-renderer";
import RecentFlags from "../../screens/RecentFlags";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("RecentFlags Screen", () => {
  it("renders without crashing", () => {
    jest.useFakeTimers();
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <RecentFlags route={{ name: "createFlag" }} />
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
