export default `
  intpu OrderBy {
    column: String
    order: Order 
  }
  input searchServer {
    search: String
    sort: [String]
  }
`;
