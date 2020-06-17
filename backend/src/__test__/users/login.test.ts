import loginResolver from "../../graphql-service/users/resolvers/mutation/login";
import registerResolver from "../../graphql-service/users/resolvers/mutation/register";
import generator from "../../utils/generator/code-pattern";

describe("login", () => {
  test("login complete", async () => {
    const data = {
      username: generator("xxxxxxxxxxx"),
      password: generator("xxxxxxxxxxx")
    };
    await registerResolver.Mutation.register(null, data);
    const result = await loginResolver.Mutation.login(null, data);
    expect(result.token).not.toEqual(undefined);
  });

  test("login wrong Username", async () => {
    try {
      const data = {
        username: generator("xxxxxxxxxxx"),
        password: generator("xxxxxxxxxxx")
      };
      await registerResolver.Mutation.register(null, data);
      await loginResolver.Mutation.login(null, {
        username: "wrong",
        password: "test"
      });
    } catch (e) {
      expect(e.message).toEqual("username not found");
    }
  });

  test("login wrong Password", async () => {
    try {
      const data = {
        username: generator("xxxxxxxxxxx"),
        password: generator("xxxxxxxxxxx")
      };
      await registerResolver.Mutation.register(null, data);
      await loginResolver.Mutation.login(null, {
        username: data.username,
        password: "wrong"
      });
    } catch (e) {
      expect(e.message).toEqual("password is incorrect");
    }
  });
});
