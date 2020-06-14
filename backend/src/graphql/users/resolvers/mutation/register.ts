import { IUser } from "../../../../types/user";
import db from "../../../../db";
import * as argon from "argon2";
import { ApolloError } from "apollo-server-fastify";
import createError from "../../../../utils/helpers/create-error-message";

export default {
  Mutation: {
    register: async function(
      _: any,
      { username, password }: IUser
    ): Promise<IUser> {
      try {
        const hashPassword = await argon.hash(password);
        const result = await db
          .insert({ username, password: hashPassword })
          .into("users")
          .returning(["username", "userId", "updateAt", "createAt"]);

        return result[0];
      } catch (e) {
        const { code, message } = createError("user", e.message);
        throw new ApolloError(message, code);
      }
    }
  }
};
