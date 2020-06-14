import { IUser } from "../../../../types/user";
import db from "../../../../db";
import * as argon from "argon2";
import { ApolloError } from "apollo-server-fastify";
import createError from "../../../../utils/helpers/create-error-message";

export default{
  Mutataion:{
    login: async function(_:any,{username,password}:IUser): Promise<IUser>{
      try{
        const userInfo = await
      }catch(e){
        const {code,message} = createError('user',e.message);
        throw new ApolloError(message,code);
      }
      return null
    }
  }
}
