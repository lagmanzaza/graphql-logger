import { makeExecutableSchema } from "apollo-server-fastify";

import merge from "../utils/transform/merge";
import * as jsonScalar from "graphql-type-json";
// schemas
import user from "./users";
import server from "./servers";
import scalars from "./scalars-enums";

const defaultTypeDef = `
  scalar JSON
  type Query{
    helloQuery: String
  }

  type Mutation{
    helloMutation(name:String!): String
  }

  type Subscription{
    helloSubscription: String
  }
`;
const typeDefs = [
  defaultTypeDef,
  ...user.typeDefs,
  ...scalars.typeDefs,
  ...server.typeDefs
];
const resolvers = merge(
  {},
  { JSON: jsonScalar },
  ...user.resolvers,
  ...server.resolvers
);

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
