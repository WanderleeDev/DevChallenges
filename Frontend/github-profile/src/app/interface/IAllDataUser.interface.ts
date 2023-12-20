import { IUsersGithub } from "./IUserGithub.interface";
import { IUserRepositories } from "./IUserRepositories.interface";

export interface IDataUser {
  user: IUsersGithub,
  repositories: IUserRepositories[];
}
