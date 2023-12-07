import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//  services
import { BoxTextStateService } from './boxTextState.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private readonly API_TRANSLATE = 'https://api.mymemory.translated.net/get'
  private httpTranslate = inject(HttpClient);
  private language = '';

  constructor (private boxTextStateSvc: BoxTextStateService) {}

  public getTranslate(lang: string) {
    let params = new HttpParams();
    params = params.set('q', this.boxTextStateSvc.getContentText());
    params = params.set('langpair', lang);

    return this.httpTranslate.get(this.API_TRANSLATE, {params: params})
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === HttpStatusCode.Forbidden) {
            return throwError(() => new Error(`Código de error ${err.status}: ${err.message}`))
          }
          return throwError(() => new Error('Error desconocido'))
        }))
  }
}
