import * as fastify from "fastify";
import server from "./graphql-service";
import * as dotenv from "dotenv";

dotenv.config();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async () => {
  const app = fastify();
  app.register(server.createHandler());
  server.installSubscriptionHandlers(app.server);
  const port = process.env.SERVER_PORT || 3030;
  await app.listen(Number(port), "0.0.0.0");
  console.log("listening");
  return;
};
