export default `
  extend type Query{
    getServer(search: searchServer!): [Server]
  }
`;
