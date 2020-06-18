import resolver from "../../graphql-service/servers/resolvers/mutations/create-server";
import login from "../mocks/login";

import randomName from "../../utils/generator/code-pattern";
describe("create server", () => {
  test("create server correctly", async () => {
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

    expect(result.message).toEqual("created");
    expect(result.action).toEqual("create");
  });
});
