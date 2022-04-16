/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSpot = /* GraphQL */ `
  mutation CreateSpot(
    $input: CreateSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    createSpot(input: $input, condition: $condition) {
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
export const updateSpot = /* GraphQL */ `
  mutation UpdateSpot(
    $input: UpdateSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    updateSpot(input: $input, condition: $condition) {
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
export const deleteSpot = /* GraphQL */ `
  mutation DeleteSpot(
    $input: DeleteSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    deleteSpot(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
