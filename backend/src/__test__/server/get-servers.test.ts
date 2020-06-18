import createServer from "../mocks/create-server";
import getServers from "../../graphql-service/servers/resolvers/queries/get-server";

const baseQuery = {
  limit: 10,
  offset: 0
};
describe("get Server", () => {
  test("get by limit", async () => {
    const { userInfo } = await createServer();
    await Promise.all([
      createServer(),
      createServer(),
      createServer(),
      createServer(),
      createServer(),
      createServer(),
      createServer(),
      createServer(),
      createServer(),
      createServer(),
      createServer(),
      createServer()
    ]);

    const result = await getServers.Query.getServers(null, baseQuery, {
      userInfo
    });

    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});
