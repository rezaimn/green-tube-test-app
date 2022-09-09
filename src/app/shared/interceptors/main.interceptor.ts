import {Injectable} from '@angular/core';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(
    private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({headers: request.headers.set('X-Master-Key', environment.XMasterKey)});
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let message = '';
        if (error.status === 403 || error.status === 401) {
          this.router.navigate(['auth/login']);
        } else if (error.status === 406) {

        }

        return throwError(error);
      }));
  }
}
