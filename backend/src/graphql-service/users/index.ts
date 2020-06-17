import userType from "./schema/type";
import queries from "./schema/queries";
import mutations from "./schema/mutations";

import registerResolver from "./resolvers/mutation/register";
import loginResolver from "./resolvers/mutation/login";

export default {
  typeDefs: [userType, queries, mutations],
  resolvers: [registerResolver, loginResolver]
};
