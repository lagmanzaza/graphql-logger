import db from "../../../../db";
import { IServer } from "../../../../types/server";
import { ResolverContext } from "../../../../types/graphql-context";
import validateToken from "../../../../utils/authorization/validate-token";
import createError from "../../../../utils/helpers/create-error-message";
import { ApolloError } from "apollo-server-fastify";

export default {
  Mutation: {
    updateServer: async (
      _: unknown,
      { serverId, name }: IServer
    ): Promise<IServer> => {}
  }
};
