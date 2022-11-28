import React from "react";
import renderer from "react-test-renderer";
import Login from "../../screens/Login";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("Login Screen", () => {
  it("renders without crashing", () => {
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <Login />
          </AuthProvider>
        </MockedProvider>
      )
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
