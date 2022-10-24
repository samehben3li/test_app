import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      user {
        id
        email
        username
      }
    }
  }
`;
export const CREATE_FLAG = gql`
  mutation (
    $riskCategory: InputOption!
    $riskCategoryType: InputOption!
    $plantPart: InputOption!
    $location: LocationInput
  ) {
    addFlag(
      riskCategory: $riskCategory
      riskCategoryType: $riskCategoryType
      plantPart: $plantPart
      location: $location
    ) {
      id
    }
  }
`;
