import React from "react";
import renderer, { act } from "react-test-renderer";
import { FlagOptions } from "../../components";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

jest.mock("react-native-reanimated", () => {
  return {
    ...jest.requireActual("react-native-reanimated/mock"),
    ...jest.requireActual("react-native-reanimated/src/reanimated2/mock"),
  };
});

describe("FlagOptions Component", () => {
  it("renders without crashing", () => {
    jest.useFakeTimers();
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <FlagOptions
              data={{
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
    act(() => {
      jest.runAllTimers();
    });
    expect(rendered).toBeTruthy();
  });
});
