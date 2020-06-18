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
      { serverId, name }: IServer,
      { userInfo }: ResolverContext
    ): Promise<IServer> => {
      validateToken(userInfo);
      try {
        const updateResult = await db("servers")
          .update({ name })
          .where("serverId", "=", serverId)
          .returning("*");

        const isNotUpdated = updateResult.length === 0;
        if (isNotUpdated) throw new Error("server not found");

        return { ...updateResult[0], message: "updated", action: "update" };
      } catch (e) {
        const { code, message } = createError("server", e.message);
        throw new ApolloError(message, code);
      }
    }
  }
};
