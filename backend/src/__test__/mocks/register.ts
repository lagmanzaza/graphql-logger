import resolver from "../../graphql/users/resolvers/mutation/register";
import generator from "../../utils/generator/code-pattern";

export default async () => {
  const data = {
    username: generator("xxxxxxxxxxx"),
    password: generator("xxxxxxxxxxx")
  };
  const result = await resolver.Mutation.register(null, data);
  return result;
};
