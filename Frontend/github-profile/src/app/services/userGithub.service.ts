import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//  interface
import { IUsersGithub } from '../interface/IUserGithub.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGithubService {
  private readonly BASE_URL = 'https://api.github.com/users/';
  private readonly firstParam = 'github';

  constructor(private http: HttpClient) {}

  public getUser(username: string): Observable<IUsersGithub> {
    return this.http.get<IUsersGithub>(`${this.BASE_URL}${username}`);
  }
}
