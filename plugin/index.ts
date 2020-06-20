import {
  ApolloServerPlugin,
  GraphQLRequestContext,
  GraphQLRequestListener,
  GraphQLServiceContext,
  GraphQLResponse,
} from "apollo-server-plugin-base";
import {
  ApolloError,
  AuthenticationError,
  ForbiddenError,
} from "apollo-server-errors";

export interface ApolloIdempotentConfig {
  myOption: boolean;
}

export default {
  requestDidStart(context: GraphQLRequestContext) {
    console.log("Request started!");
    return {
      parsingDidStart(context: GraphQLRequestContext) {
        console.log("Parsing started!");
      },

      validationDidStart(context: GraphQLRequestContext): void {
        console.log("Validation started!");
      },

      responseForOperation(
        context: GraphQLRequestContext
      ): GraphQLResponse | null {
        console.log("ApolloIdempotent::responseForOperation", context);
        console.log(
          "ApolloIdempotent::responseForOperation document",
          context.document
        );
        console.log(
          "ApolloIdempotent::responseForOperation operationName",
          context.operationName
        );
        console.log(
          "ApolloIdempotent::responseForOperation operation",
          context.operation
        );
        return null;
      },
    };
  },
};
