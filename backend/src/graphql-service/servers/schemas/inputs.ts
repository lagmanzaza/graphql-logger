export default `
  input OrderBy {
    column: String
    order: Order
  }

  input searchServer {
    search: String
    sort: [OrderBy]
  }
`;
