import { gql } from "@apollo/client";

export const GET_FLAGS = gql`
  query {
    getFlags {
      id
      userId
      riskCategory {
        name
        imgUrl
      }
      riskCategoryType {
        name
        imgUrl
      }
      plantPart {
        name
        imgUrl
      }
      location {
        left
        right
      }
    }
  }
`;
export const GET_RISKS = gql`
  query {
    getRiskCategories {
      id
      name
      imgUrl
      riskCategoryTypes {
        id
        name
        imgUrl
      }
    }
  }
`;
export const GET_PLANT_PARTS = gql`
  query {
    getPlantPart {
      id
      name
      imgUrl
    }
  }
`;
