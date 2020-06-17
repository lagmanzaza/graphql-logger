import registerResolver from "../../graphql-service/users/resolvers/mutations/register";
import loginResolver from "../../graphql-service/users/resolvers/mutations/login";
import generator from "../../utils/generator/code-pattern";

export default async () => {
  const data = {
    username: generator("xxxxxxxxxxx"),
    password: generator("xxxxxxxxxxx")
  };
  await registerResolver.Mutation.register(null, data);
  const result = await loginResolver.Mutation.login(null, data);

  return { ...result, rawData: data };
};
