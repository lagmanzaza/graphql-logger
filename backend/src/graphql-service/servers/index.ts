import serverType from "./schemas/types";
import queries from "./schemas/queries";
import mutations from "./schemas/mutations";
import inputs from "./schemas/inputs";

// resolvers
import createServerResolver from "./resolvers/mutations/create-server";
import updateServerResolver from "./resolvers/mutations/update-server";
import deleteServerResolver from "./resolvers/mutations/delete-server";

export default {
  typeDefs: [serverType, queries, mutations, inputs],
  resolvers: [createServerResolver, updateServerResolver, deleteServerResolver]
};
