import createServer from "../mocks/create-server";
import resolver from "../../graphql-service/servers/resolvers/mutations/delete-server";

describe("delete server", () => {
  test("delete completely", async () => {
    const { userInfo, ...serverInfo } = await createServer();
    const result = await resolver.Mutation.deleteServer(null, serverInfo, {
      userInfo
    });
    expect(result.message).toEqual("deleted");
    expect(result.action).toEqual("delete");
  });

  test("wrong id", async () => {
    try {
      const { userInfo, ...serverInfo } = await createServer();
      await resolver.Mutation.deleteServer(null, serverInfo, {
        userInfo
      });
    } catch (e) {
      expect(e.message).toEqual("server not found");
    }
  });
});
