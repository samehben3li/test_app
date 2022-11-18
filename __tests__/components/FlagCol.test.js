import React from "react";
import renderer from "react-test-renderer";
import { FlagCol } from "../../components";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("FlagCol Component", () => {
  it("renders without crashing", () => {
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <FlagCol />
          </AuthProvider>
        </MockedProvider>
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });
});
