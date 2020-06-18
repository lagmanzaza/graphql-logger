import resolver from "../../graphql-service/servers/resolvers/mutations/create-server";
import login from "../mocks/login";

import randomName from "../../utils/generator/code-pattern";
export default async function() {
  const { userId } = await login();
  const userInfo = {
    isValid: true,
    userId
  };
  const result = await resolver.Mutation.createServer(
    null,
    { name: randomName("xxxxxxxxx") },
    { userInfo }
  );
  return { ...result, userInfo };
}
