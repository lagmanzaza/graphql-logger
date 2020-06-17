import { IncomingMessage, ServerResponse } from "http";

export interface ResolverContext {
  _extensionStac: any;
  userInfo: {
    isValid: boolean;
    userId: number;
    iat: number;
    exp: number;
  };
}

export interface ServerContext {
  req: IncomingMessage;
  res: ServerResponse;
}
