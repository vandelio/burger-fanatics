/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpot = /* GraphQL */ `
  query GetSpot($id: ID!) {
    getSpot(id: $id) {
      id
      name
      description
      location
      calculatedRating
      reviews {
        items {
          id
          title
          text
          rating
          createdAt
          updatedAt
          spotReviewsId
          userReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSpots = /* GraphQL */ `
  query ListSpots(
    $filter: ModelSpotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        location
        calculatedRating
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      title
      text
      rating
      comments {
        items {
          id
          content
          like
          createdAt
          updatedAt
          reviewCommentsId
          postCommentsId
        }
        nextToken
      }
      spot {
        id
        name
        description
        location
        calculatedRating
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        profilename
        avatarPath
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      spotReviewsId
      userReviewsId
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        text
        rating
        comments {
          nextToken
        }
        spot {
          id
          name
          description
          location
          calculatedRating
          createdAt
          updatedAt
        }
        user {
          id
          name
          profilename
          avatarPath
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        spotReviewsId
        userReviewsId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      profilename
      avatarPath
      reviews {
        items {
          id
          title
          text
          rating
          createdAt
          updatedAt
          spotReviewsId
          userReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        profilename
        avatarPath
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      text
      imagePath
      comments {
        items {
          id
          content
          like
          createdAt
          updatedAt
          reviewCommentsId
          postCommentsId
        }
        nextToken
      }
      like
      share
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        imagePath
        comments {
          nextToken
        }
        like
        share
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      review {
        id
        title
        text
        rating
        comments {
          nextToken
        }
        spot {
          id
          name
          description
          location
          calculatedRating
          createdAt
          updatedAt
        }
        user {
          id
          name
          profilename
          avatarPath
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        spotReviewsId
        userReviewsId
      }
      post {
        id
        text
        imagePath
        comments {
          nextToken
        }
        like
        share
        createdAt
        updatedAt
      }
      content
      like
      createdAt
      updatedAt
      reviewCommentsId
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        review {
          id
          title
          text
          rating
          createdAt
          updatedAt
          spotReviewsId
          userReviewsId
        }
        post {
          id
          text
          imagePath
          like
          share
          createdAt
          updatedAt
        }
        content
        like
        createdAt
        updatedAt
        reviewCommentsId
        postCommentsId
      }
      nextToken
    }
  }
`;
