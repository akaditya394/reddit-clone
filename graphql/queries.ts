import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      body
      created_at
      id
      image
      subreddit {
        topic
        id
        created_at
      }
      username
      title
      subreddit_id
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
      comments {
        created_at
        id
        post_id
        username
        text
      }
    }
  }
`;

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      body
      created_at
      id
      image
      subreddit {
        topic
        id
        created_at
      }
      username
      title
      subreddit_id
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
      comments {
        created_at
        id
        post_id
        username
        text
      }
    }
  }
`;

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;
