import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DeleteResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //todo the interceptor is working, now
    // 1. convert to response interceptor
    // 2. only intercept the response from deleteDriver
    // 3. replace the response with the driver id, which is provided in the request

    return next.handle(request);
  }
}
