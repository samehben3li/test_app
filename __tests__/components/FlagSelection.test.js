import React from "react";
import renderer from "react-test-renderer";
import { FlagSelection } from "../../components";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("FlagSelection Component", () => {
  it("renders without crashing", () => {
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <FlagSelection
              selectedTab={{
                name: "selectedTabName",
                title: "selectedTilte",
                hint: "selectedHint",
                options: [],
                location: false,
              }}
            />
          </AuthProvider>
        </MockedProvider>
      )
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
