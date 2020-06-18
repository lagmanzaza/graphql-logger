import createServer from "../mocks/create-server";
import getServerById from "../../graphql-service/servers/resolvers/queries/get-id";

describe("get Server", () => {
  test("get by id", async () => {
    const { userInfo, ...serverInfo } = await createServer();

    const result = await getServerById.Query.getServerById(null, serverInfo, {
      userInfo
    });

    expect(result.name).toEqual(serverInfo.name);
    expect(result.key).toEqual(serverInfo.key);
  });

  test("wrong id", async () => {
    try {
      const { userInfo, ...serverInfo } = await createServer();

      await getServerById.Query.getServerById(
        null,
        {
          serverId: serverInfo.serverId + 30,
          ...serverInfo
        },
        {
          userInfo
        }
      );
    } catch (e) {
      expect(e.message).toEqual("server not found");
    }
  });

  test("wrong owner", async () => {
    try {
      const { userInfo, ...serverInfo } = await createServer();

      await getServerById.Query.getServerById(
        null,
        {
          serverId: serverInfo.serverId + 30,
          ...serverInfo
        },
        {
          userInfo: {
            userId: userInfo.userId + 30,
            ...userInfo
          }
        }
      );
    } catch (e) {
      expect(e.message).toEqual("your permission is not permitted");
    }
  });
});
