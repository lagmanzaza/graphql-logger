enum Order {
  ASC = "asc",
  DESC = "desc"
}
interface OrderBy {
  column: string;
  order: Order;
}

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

export interface ISearchServer {
  search?: string;
  sort?: OrderBy[];
  limit: number;
  offset: number;
}
