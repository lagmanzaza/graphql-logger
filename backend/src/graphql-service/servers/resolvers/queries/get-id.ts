import db from "../../../../db";
import { IServer } from "../../../../types/server";
import { ResolverContext } from "../../../../types/graphql-context";
import validateToken from "../../../../utils/authorization/validate-token";
import createError from "../../../../utils/helpers/create-error-message";
import { ApolloError } from "apollo-server-fastify";

export default {
  Query: {
    getServerById: async (
      _: unknown,
      { serverId }: IServer,
      { userInfo }: ResolverContext
    ): Promise<IServer> => {
      validateToken(userInfo);
      try {
        const result = await db
          .select("serverId", "ownerId", "name", "key", "createAt", "updateAt")
          .from("servers")
          .where("serverId", "=", serverId);

        const isNotExist = result.length === 0;
        if (isNotExist) throw new Error("server not found");

        const isNotOwner = result[0].ownerId !== userInfo.userId;
        if (isNotOwner) throw new Error("your permission is not permitted");

        return result[0];
      } catch (e) {
        const { code, message } = createError("server", e.message);
        throw new ApolloError(message, code);
      }
    }
  }
};
