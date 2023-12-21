import { IUsersGithub } from "./IUserGithub.interface";
import { IUserRepositories } from "./IUserRepositories.interface";

export interface IDataUser {
  user: IUsersGithub | null,
  repositories: IUserRepositories[],
  loading: boolean,
  error: string | null,
}
