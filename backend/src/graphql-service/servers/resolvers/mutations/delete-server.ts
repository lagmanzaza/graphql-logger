import db from "../../../../db";
import { IServer } from "../../../../types/server";
import { ResolverContext } from "../../../../types/graphql-context";
import validateToken from "../../../../utils/authorization/validate-token";
import createError from "../../../../utils/helpers/create-error-message";
import { ApolloError } from "apollo-server-fastify";

export default {
  Mutation: {
    deleteServer: async (
      _: unknown,
      { serverId }: IServer,
      { userInfo }: ResolverContext
    ): Promise<IServer> => {
      validateToken(userInfo);
      try {
        const deleteResult: any = await db("servers")
          .where("serverId", "=", serverId)
          .returning("*")
          .del();

        const isNotDelete = deleteResult === 0;
        if (isNotDelete) throw new Error("server not found");

        return { ...deleteResult, message: "deleted", action: "delete" };
      } catch (e) {
        const { code, message } = createError("server", e.message);
        throw new ApolloError(message, code);
      }
    }
  }
};
