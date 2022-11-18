import React from "react";
import renderer from "react-test-renderer";
import { NewFlag } from "../../components";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("NewFlag Component", () => {
  it("renders without crashing", () => {
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <NewFlag
              selectedTab={{
                name: "selectedTabName",
                title: "selectedTilte",
                hint: "selectedHint",
                options: [],
                location: false,
              }}
              flagData={{
                risk: null,
                pest: null,
                plantPart: null,
                location: {
                  left: ["TOP"],
                  right: ["BOTTOM"],
                },
              }}
            />
          </AuthProvider>
        </MockedProvider>
      )
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
