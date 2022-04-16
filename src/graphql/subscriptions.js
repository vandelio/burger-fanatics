/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSpot = /* GraphQL */ `
  subscription OnCreateSpot {
    onCreateSpot {
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
export const onUpdateSpot = /* GraphQL */ `
  subscription OnUpdateSpot {
    onUpdateSpot {
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
export const onDeleteSpot = /* GraphQL */ `
  subscription OnDeleteSpot {
    onDeleteSpot {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
