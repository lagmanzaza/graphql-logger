import dateScalar from "./date";
import orderEnum from "./order";

export default {
  typeDefs: [dateScalar.typeDef, orderEnum.typeDef],
  resolvers: [dateScalar.resolver]
};
