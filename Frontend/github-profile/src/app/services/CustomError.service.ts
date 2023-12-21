import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomErrorService {
  public handleCustomHttpError (error: HttpErrorResponse): Observable<never> {
    const timestamp = new Date().toLocaleString();
    console.log(error);

    switch (error.status) {
      case HttpStatusCode.Conflict :
        return throwError(() => new Error(`[${timestamp}] Algo está fallando en el servidor`));

      case HttpStatusCode.NotFound :
        return throwError(() => new Error(`[${timestamp}] El producto no existe`));

      case HttpStatusCode.Unauthorized :
        return throwError(() => new Error(`[${timestamp}] No estás autorizado`));

      case HttpStatusCode.BadRequest :
        return throwError(() => new Error(`[${timestamp}]  Pedido errado al servidor`));

      default:
        return throwError(() => new Error(`[${timestamp}] Error interno: ${error.message}`));
    }
  }
}
