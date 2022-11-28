import React from "react";
import renderer from "react-test-renderer";
import RecentFlags from "../../screens/RecentFlags";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("RecentFlags Screen", () => {
  it("renders without crashing", () => {
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <RecentFlags route={{ name: "createFlag" }} />
          </AuthProvider>
        </MockedProvider>
      )
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
