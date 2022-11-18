import React from "react";
import renderer, { act } from "react-test-renderer";
import { LocationsCol } from "../../components";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("LocationsCol Component", () => {
  it("renders without crashing", () => {
    jest.useFakeTimers();
    const rendered = renderer
      .create(
        <MockedProvider>
          <AuthProvider value={{}}>
            <LocationsCol
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
    act(() => {
      jest.runAllTimers();
    });
    expect(rendered).toBeTruthy();
  });
});
