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
          name
        }
        level {
          name
          weight
        }
      }
    }
  }
`;

export const skills = gql`
  query skills {
    skills {
      id
      name
    }
  }
`;
