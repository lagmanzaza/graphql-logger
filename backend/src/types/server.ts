export interface IServer {
  message: string;
  action: string;
  serverId: number;
  ownerId: number;
  key: string;
  name: string;
  createAt: Date;
  updateAt: Date;
}

export interface IServerInput {
  name: string;
}
