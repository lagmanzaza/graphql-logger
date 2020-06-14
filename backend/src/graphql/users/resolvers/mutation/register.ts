import { IUser } from "../../../../types/user";

export default {
  Mutation: {
    register: async function(
      _: any,
      { username, password }: IUser
    ): Promise<IUser> {
      console.log(username, password);
      return null;
    }
  }
};
