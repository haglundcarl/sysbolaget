/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBeer = /* GraphQL */ `
  query GetBeer($id: ID!) {
    getBeer(id: $id) {
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
export const listBeers = /* GraphQL */ `
  query ListBeers(
    $filter: ModelBeerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        filePath
        like
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
