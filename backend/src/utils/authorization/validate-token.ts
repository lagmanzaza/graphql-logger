import { ApolloError } from "apollo-server-fastify";

export default (userInfo: any) => {
  if (!userInfo.isValid) throw new ApolloError("token is invalid", "401");
};
