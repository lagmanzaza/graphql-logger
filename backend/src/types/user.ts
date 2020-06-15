export interface IUser {
  userId: string;
  username: string;
  password: string;
  createAt: Date;
  updateAt: Date;
  token: string;
  expire: Date;
}

export interface IAuthentication {
  username: string;
  password: string;
}
