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
  private dataUser$ = new BehaviorSubject<IDataUser>({
    user: null,
    repositories: [],
    loading: true,
    error: null
  })

  constructor(
    private http: HttpClient,
    private customErrorScv: CustomErrorService,
  ) {}

  public getDataUser$(): Observable<IDataUser> {
    return this.dataUser$.asObservable();
  }

  public getAllDataUser (user: string): void {
    this.dataUser$.next({ ...this.dataUser$.getValue(), loading: true, error: null })

    const user$ = this.getUser(user)
    const repositories$ = user$.pipe(
      switchMap((user) => this.getRepositories(user.repos_url))
    )

    forkJoin({ user: user$, repositories: repositories$ }).subscribe({
      next: (data) => {
        this.dataUser$.next({...data, error: null, loading: false,})
        console.log('aquí no');

      },
      error: (err: HttpErrorResponse) => {
        this.handleError(err)
        console.log('aquí si');
      }
    })
  }

  private getUser(username: string): Observable<IUsersGithub>{
    return this.http.get<IUsersGithub>(`${this.BASE_URL}${username}`)
  }

  private getRepositories(url: string): Observable<IUserRepositories[]> {
    return this.http.get<IUserRepositories[]>(url)
      .pipe(catchError((err: HttpErrorResponse) => this.customErrorScv.handleCustomHttpError(err)))
  }

  private handleError(error: HttpErrorResponse): void {
    this.dataUser$.next({
      ...this.dataUser$.getValue(),
      user: null,
      error: error.message,
      loading: false
    });
  }
}
