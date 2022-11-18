import React from "react";
import renderer from "react-test-renderer";
import { FlagList } from "../../components";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("FlagList Component", () => {
  it("renders without crashing", () => {
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <FlagList />
          </AuthProvider>
        </MockedProvider>
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });
});
