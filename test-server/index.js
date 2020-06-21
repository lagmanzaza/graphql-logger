const { ApolloServer, ApolloError, gql } = require("apollo-server");
const plugin = require("gr-log");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    getName(name: String!): [Book]
  }
`;

const books = [
  {
    title: "test Book1",
    author: "test Author1",
  },
  {
    title: "test Book2",
    author: "test Author2",
  },
];

const resolvers = {
  Query: {
    books: () => books,
    getName: (_, { name }) => {
      const random = Math.floor(Math.random() * 5);
      if (random === 1) {
        return books.filter((book) => book.title.search(name) !== -1);
      }

      throw new ApolloError("Error", 400);
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    plugin({
      enginUrl: "http://jsonplaceholder.typicode.com/posts",
      key: "test",
    }),
  ],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
