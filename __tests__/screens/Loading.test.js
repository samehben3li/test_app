import React from "react";
import renderer from "react-test-renderer";
import Loading from "../../screens/Loading";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("Loading Screen", () => {
  it("renders without crashing", () => {
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <Loading />
          </AuthProvider>
        </MockedProvider>
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });
});
