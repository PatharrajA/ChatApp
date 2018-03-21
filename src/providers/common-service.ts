import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

import { HttpInterceptor } from './interceptor';


@Injectable()
export class CommonServiceProvider {

  constructor(public http: HttpInterceptor) {
    console.log('Hello CommonServiceProvider Provider');
  }

  get(url: string) {
    return this.http.get(url).map((response: Response) => { return response.json(); }).catch((error) => { return Observable.throw(error); });
  };

  post(url: string, model: object) {
    return this.http.post(url, model).map((response: Response) => { return response.json(); }).catch((error) => { return Observable.throw(error); });
  };

  put(url: string, model: object) {
    return this.http.put(url, model).map((response: Response) => { return response.json(); }).catch((error) => { return Observable.throw(error); });
  };

  delete(url: string) {
    return this.http.delete(url).map((response: Response) => { return response.json(); }).catch((error) => { return Observable.throw(error); });
  };

}
