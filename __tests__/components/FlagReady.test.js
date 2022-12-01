import React from "react";
import renderer from "react-test-renderer";
import { FlagReady } from "../../components";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";
jest.mock("react-native-reanimated", () => {
  return {
    ...jest.requireActual("react-native-reanimated/mock"),
    ...jest.requireActual("react-native-reanimated/src/reanimated2/mock"),
  };
});

describe("FlagReady Component", () => {
  it("renders without crashing", () => {
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <FlagReady
              done={false}
              completed={true}
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
