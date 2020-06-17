import userType from "./schemas/types";
import queries from "./schemas/queries";
import mutations from "./schemas/mutations";

import registerResolver from "./resolvers/mutations/register";
import loginResolver from "./resolvers/mutations/login";

export default {
  typeDefs: [userType, queries, mutations],
  resolvers: [registerResolver, loginResolver]
};
