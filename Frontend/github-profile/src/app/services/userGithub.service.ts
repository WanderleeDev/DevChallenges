import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, forkJoin, switchMap } from 'rxjs';
//  services
import { CustomErrorService } from './CustomError.service';
//  interface
import { IUsersGithub } from '../interface/IUserGithub.interface';
import { IUserRepositories } from '../interface/IUserRepositories.interface';
import { IDataUser } from '../interface/IAllDataUser.interface';


@Injectable({
  providedIn: 'root'
})
export class UserGithubService  {
  private readonly BASE_URL = 'https://api.github.com/users/';
  private dataUser$ = new BehaviorSubject<IDataUser | null>(null)

  constructor(
    private http: HttpClient,
    private customErrorScv: CustomErrorService,
  ) {
    this.getAllDataUser('github')
  }

  public getDataUser$(): Observable<IDataUser | null> {
    return this.dataUser$.asObservable();
  }

  public getAllDataUser (user: string): void {
    const user$ = this.getUser(user)
    const repositories$ = user$.pipe(
      switchMap((user) => this.getRepositories(user.repos_url))
    )

    forkJoin({ user: user$, repositories: repositories$ }).subscribe({
      next: (data) => this.dataUser$.next(data),
      error: (error: HttpErrorResponse) => this.customErrorScv.handleCustomHttpError(error),
      complete: () => console.log('data obtain')
    })
  }

  private getUser(username: string): Observable<IUsersGithub>{
    return this.http.get<IUsersGithub>(`${this.BASE_URL}${username}`)
      .pipe(catchError((err: HttpErrorResponse) => this.customErrorScv.handleCustomHttpError(err)))
  }

  private getRepositories(url: string): Observable<IUserRepositories[]> {
    return this.http.get<IUserRepositories[]>(url)
      .pipe(catchError((err: HttpErrorResponse) => this.customErrorScv.handleCustomHttpError(err)))
  }
}
