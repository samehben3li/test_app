import React from "react";
import renderer from "react-test-renderer";
import { LocationsCol } from "../../components";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";

describe("LocationsCol Component", () => {
  it("renders without crashing", () => {
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
    expect(rendered).toMatchSnapshot();
  });
});
