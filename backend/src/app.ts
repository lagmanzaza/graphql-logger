import * as fastify from "fastify";
import server from "./graphql";
import * as dotenv from "dotenv";
dotenv.config();
export default async () => {
  const app = fastify();
  app.register(server.createHandler());
  server.installSubscriptionHandlers(app.server);
  await app.listen(3030, "0.0.0.0");
  console.log("listening");
  return;
};
