import db from "../../../../db";
import { IServerInput, IServer } from "../../../../types/server";
import { ResolverContext } from "../../../../types/graphql-context";
import validateToken from "../../../../utils/authorization/validate-token";
import createError from "../../../../utils/helpers/create-error-message";
import { ApolloError } from "apollo-server-fastify";
import generateServerKey from "../../../../utils/generator/code-pattern";

export default {
  Mutation: {
    createServer: async (
      _: unknown,
      { name }: IServerInput,
      { userInfo }: ResolverContext
    ): Promise<IServer> => {
      validateToken(userInfo);
      try {
        const serverInfo = await db
          .select("serverId")
          .from("servers")
          .where("name", "=", name)
          .where("ownerId", "=", userInfo.userId)
          .limit(1);

        const isDuplicateServerName = serverInfo.length !== 0;
        if (isDuplicateServerName) throw new Error("duplicated server name");

        const insertedServer = await db
          .insert({
            name,
            ownerId: userInfo.userId,
            key: generateServerKey("xxxxxxxxxxxxxxxx")
          })
          .into("servers")
          .returning("*");

        return { ...insertedServer[0], message: "created", action: "create" };
      } catch (e) {
        const { code, message } = createError("server", e.message);
        throw new ApolloError(message, code);
      }
    }
  }
};
