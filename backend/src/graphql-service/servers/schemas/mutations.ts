export default `
  extend type Mutation{
    createServer(name: String!): Server
    updateServer(name: String!): Server
    deleteServer(serverId: Int!): Server
  }
`;
