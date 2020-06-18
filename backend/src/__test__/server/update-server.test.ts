import createServer from "../mocks/create-server";
import resolver from "../../graphql-service/servers/resolvers/mutations/update-server";

describe("update server", () => {
  test("update completely", async () => {
    const { userInfo, ...serverInfo } = await createServer();
    const result = await resolver.Mutation.updateServer(null, serverInfo, {
      userInfo
    });
    expect(result.message).toEqual("updated");
    expect(result.action).toEqual("update");
  });

  test("wrong id", async () => {
    try {
      const { userInfo, ...serverInfo } = await createServer();
      await resolver.Mutation.updateServer(null, serverInfo, {
        userInfo
      });
    } catch (e) {
      expect(e.message).toEqual("server not found");
    }
  });
});
