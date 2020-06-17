import resolver from "../../graphql-service/users/resolvers/mutations/register";
import generator from "../../utils/generator/code-pattern";

describe("registration", () => {
  test("register", async () => {
    const data = {
      username: generator("xxxxxxxxxxx"),
      password: generator("xxxxxxxxxxx")
    };
    const result = await resolver.Mutation.register(null, data);
    expect(result.username).toEqual(data.username);
  });
});
