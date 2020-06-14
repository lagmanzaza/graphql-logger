import { ApolloServer, makeExecutableSchema } from "apollo-server-fastify";
import merge from "../utils/transform/merge";

// schemas
import user from "./users";
import scalars from "./scalars";

const defaultTypeDef = `
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
const typeDefs = [defaultTypeDef, ...user.typeDefs, ...scalars.typeDefs];
const resolvers = merge({}, ...user.resolvers, ...scalars.resolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
export default new ApolloServer({
  schema,
  debug: false,
  formatError: (err: any) => {
    //
    // const { code } = extensions;
    // return {
    //   message,
    //   locations: [],
    //   code,
    //   path,
    // };
    return err;
  }
});
