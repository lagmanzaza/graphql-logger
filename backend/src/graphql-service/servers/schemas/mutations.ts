export default `
  extend type Mutation{
    createServer(name: String!): Server
    updateServer(serverId: Int!,name: String!): Server
    deleteServer(serverId: Int!): Server
  }
`;
