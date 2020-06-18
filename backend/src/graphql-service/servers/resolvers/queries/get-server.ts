import db from "../../../../db";
import { ISearchServer, IServer } from "../../../../types/server";
import { ResolverContext } from "../../../../types/graphql-context";
import validateToken from "../../../../utils/authorization/validate-token";
import createError from "../../../../utils/helpers/create-error-message";
import { ApolloError } from "apollo-server-fastify";

export default {
  Query: {
    getServers: async (
      _: unknown,
      { search, sort, limit, offset }: ISearchServer,
      { userInfo }: ResolverContext
    ): Promise<IServer[]> => {
      validateToken(userInfo);
      try {
        let baseQuery = db
          .select("serverId", "ownerId", "name", "key", "createAt", "updateAt")
          .from("servers")
          .limit(limit)
          .offset(offset);

        const isSearchExist = search !== undefined;
        if (isSearchExist) {
          baseQuery = baseQuery
            .where("name", "like", `%${search}%`)
            .orWhere("key", "like", `%${search}%`);
        }

        const isOrderByExist = sort !== undefined;
        if (isOrderByExist) {
          sort.forEach(({ column, order }) => {
            baseQuery = baseQuery.orderBy(column, order);
          });
        }

        const result = await baseQuery.where("ownerId", "=", userInfo.userId);
        return result;
      } catch (e) {
        const { code, message } = createError("server", e.message);
        throw new ApolloError(message, code);
      }
    }
  }
};
