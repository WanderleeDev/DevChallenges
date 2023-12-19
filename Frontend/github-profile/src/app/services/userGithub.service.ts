import { Injectable, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { match } from 'ts-pattern';
//  interface
import { IUsersGithub } from '../interface/IUserGithub.interface';
import { IUserRepositories } from '../interface/IUserRepositories.interface';

interface IState {
  loading: boolean,
  user: IUsersGithub | null
}

@Injectable({
  providedIn: 'root'
})
export class UserGithubService {
  private readonly BASE_URL = 'https://api.github.com/users/';
  userSignal = signal<IUsersGithub | null>(null)
  computedUser = computed(() => this.userSignal())

  #stateUser = signal<IState>({
    loading: true,
    user: null
  })
  computedState = computed(() => this.#stateUser().user)
  computedLoading = computed(() => this.#stateUser().loading)

  constructor(private http: HttpClient) {
    this.getUser('github')
    console.log(this.#stateUser());

  }

  public getUser(username: string): void {
    this.http.get<IUsersGithub>(`${this.BASE_URL}${username}`)
      .subscribe({
        next: (user) => {
          this.setUser(user);
          console.log(this.userSignal());
          console.log(this.computedUser());

        },
        error: (err) => console.log(err),
        complete: () => console.log('Data initialized')
      })
  }

  getUserSignal (): IUsersGithub | null {
    return this.userSignal();
  }

  private setUser (newUser: IUsersGithub) {
    this.#stateUser.set({
      loading: false,
      user: newUser
    });
  }

  public async getRepositories(url: string): Promise<IUserRepositories[] | null> {
    try {
      const fetchRepositories: Response = await fetch(url);
      return match(fetchRepositories.ok)
      .with(true, ():Promise<IUserRepositories[]> => fetchRepositories.json())
      .otherwise(() => { throw new Error('Error')} )
    } catch (err) {
      console.log(err);
      return null
    }
  }
}
