export default `
  extend type Query{
    getServers(search: searchServer!): [Server]
    getServerById(serverId: Int!): Server
  }
`;
