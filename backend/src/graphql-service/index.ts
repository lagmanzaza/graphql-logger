import { ApolloServer } from "apollo-server-fastify";
import schema from "./schema";
import { ServerContext } from "../types/graphql-context";
import jwt from "../jwt";

export default new ApolloServer({
  schema,
  debug: false,
  context: async ({ req }: ServerContext) => {
    const userInfo = jwt.verify(req.headers.authorization);
    return { userInfo };
  },
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
