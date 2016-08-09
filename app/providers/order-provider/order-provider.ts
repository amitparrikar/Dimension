import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CommonProvider } from '../common-provider/common-provider';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OrderProvider {

  constructor(private http: Http, commonProvider: CommonProvider) {}

  publishOrder(){

  }

}

