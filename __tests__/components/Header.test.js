import React from "react";
import renderer from "react-test-renderer";
import { Header } from "../../components";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("Header Component", () => {
  it("renders without crashing", () => {
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <Header />
          </AuthProvider>
        </MockedProvider>
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });
});
