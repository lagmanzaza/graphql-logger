import { IUser } from "../../../../types/user";
import db from "../../../../db";
import * as argon from "argon2";
import { ApolloError } from "apollo-server-fastify";
import createError from "../../../../utils/helpers/create-error-message";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  Mutation: {
    login: async function(
      _: any,
      { username, password }: IUser
    ): Promise<IUser> {
      try {
        const userInfo = await db
          .select("password", "userId")
          .from("users")
          .where("username", "=", username);

        const isUserNotFound = userInfo.length === 0;
        if (isUserNotFound) {
          throw new Error("username not found");
        }

        const hashPassword = userInfo[0].password;
        const isPasswordCorrect = await argon.verify(hashPassword, password);
        if (!isPasswordCorrect) {
          throw new Error("password is incorrect");
        }

        const userId = userInfo[0].userId;
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
          expiresIn: "2d"
        });
        return {
          ...userInfo[0],
          password: null,
          expire: new Date().setDate(new Date().getDate() + 2),
          token
        };
      } catch (e) {
        const { code, message } = createError("user", e.message);
        throw new ApolloError(message, code);
      }
    }
  }
};
