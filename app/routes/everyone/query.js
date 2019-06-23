import gql from 'graphql-tag';

export const users = gql`
  query users {
    users {
      name
      avatarUrl
      userSkillLevels {
        id
        skill {
          id
        }
        level {
          name
          weight
        }
      }
    }
  }
`;
