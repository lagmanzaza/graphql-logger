export default `
  extend type Mutation{
    register(username: String! ,password: String!): User
    login(username: String! ,password: String!): User
  }
`;
