/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBeer = /* GraphQL */ `
  mutation CreateBeer(
    $input: CreateBeerInput!
    $condition: ModelBeerConditionInput
  ) {
    createBeer(input: $input, condition: $condition) {
      id
      title
      description
      filePath
      like
      createdAt
      updatedAt
    }
  }
`;
export const updateBeer = /* GraphQL */ `
  mutation UpdateBeer(
    $input: UpdateBeerInput!
    $condition: ModelBeerConditionInput
  ) {
    updateBeer(input: $input, condition: $condition) {
      id
      title
      description
      filePath
      like
      createdAt
      updatedAt
    }
  }
`;
export const deleteBeer = /* GraphQL */ `
  mutation DeleteBeer(
    $input: DeleteBeerInput!
    $condition: ModelBeerConditionInput
  ) {
    deleteBeer(input: $input, condition: $condition) {
      id
      title
      description
      filePath
      like
      createdAt
      updatedAt
    }
  }
`;
