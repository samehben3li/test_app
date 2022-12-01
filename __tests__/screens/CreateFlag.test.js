import React from "react";
import renderer from "react-test-renderer";
import CreateFlag from "../../screens/CreateFlag";
import { MockedProvider } from "@apollo/client/testing";
import AuthProvider from "../../context/authContext";
import { GET_RISKS, GET_PLANT_PARTS } from "../../requests/queries";
jest.mock("react-native-reanimated", () => {
  return {
    ...jest.requireActual("react-native-reanimated/mock"),
    ...jest.requireActual("react-native-reanimated/src/reanimated2/mock"),
  };
});
describe("CreateFlag Screen", () => {
  it("renders without crashing", () => {
    const mocks = [
      {
        request: {
          query: GET_RISKS,
        },
        result: {
          data: {
            getRiskCategories: [
              {
                id: "63567114d65144558ff2e656",
                name: "PEST",
                imgUrl: "assets/risk-category/pest.svg",
                riskCategoryTypes: [
                  {
                    id: "63567114d65144558ff2e657",
                    name: "APHIDS",
                    imgUrl: "assets/risk-category-type/pest/aphids.svg",
                  },
                  {
                    id: "63567114d65144558ff2e658",
                    name: "CATERPILLAR",
                    imgUrl: "assets/risk-category-type/pest/CATERPILLAR.svg",
                  },
                  {
                    id: "63567114d65144558ff2e659",
                    name: "RUSSET MITES",
                    imgUrl: "assets/risk-category-type/pest/RUSSET-MITES.svg",
                  },
                  {
                    id: "63567114d65144558ff2e65a",
                    name: "SPIDER MITES",
                    imgUrl: "assets/risk-category-type/pest/SPIDER-MITES.svg",
                  },
                  {
                    id: "6376221ccc89b43ca84cfb3b",
                    name: "WHITE FLY",
                    imgUrl: "assets/risk-category-type/pest/WHITE-FLY.svg",
                  },
                ],
              },
            ],
          },
        },
      },
      {
        request: {
          query: GET_PLANT_PARTS,
        },
        result: {
          data: {
            getPlantPart: [
              {
                id: "6352d5213213767db6ae01d2",
                name: "STEM",
                imgUrl: "assets/plant-part/stem.svg",
              },
              {
                id: "6352d5213213767db6ae01d3",
                name: "FRUIT",
                imgUrl: "assets/plant-part/fruit.svg",
              },
              {
                id: "63565a8235fd535495b80125",
                name: "LEAF",
                imgUrl: "assets/plant-part/leaf.svg",
              },
            ],
          },
        },
      },
    ];
    const rendered = renderer
      .create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <AuthProvider value={{ setAuth: () => null }}>
            <CreateFlag route={{ name: "createFlag" }} />
          </AuthProvider>
        </MockedProvider>
      )
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
