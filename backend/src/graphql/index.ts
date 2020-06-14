import { ApolloServer } from "apollo-server-fastify";
import merge from "../utils/transform/merge";

// schemas
import user from "./users";
import scalars from "./scalars";

const defaultTypeDef = `
  type Query{
    helloQuery: String
  }
  type Mutation{
    helloMutation: String
  }
`;
const typeDefs = [defaultTypeDef, ...user.typeDefs, ...scalars.typeDefs];
const resolvers = merge({}, ...user.resolvers, ...scalars.resolvers);
export default new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err: any) => {
    // const { path, extensions, message } = err;
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
