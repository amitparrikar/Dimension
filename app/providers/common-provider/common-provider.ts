import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import {Category} from "../../models/category";

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CommonProvider {

  designs: any = null;

  constructor(private http: Http) {}

  getDesign(){
    if(this.designs != null){
      //Return the data that is alredy loaded
      return Promise.resolve(this.designs);
    }

    //We don't have the design data yet.
    return new Promise(resolve => {

      let headers = new Headers({ 'Accept': 'application/vnd.github.3.raw' });
      let options = new RequestOptions({ headers: headers });

      // We're using Angular Http provider to request the designs,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the designs and resolve the promise with the new data.
      //this.http.get('./build/data/design.json')
      this.http.get('https://api.github.com/repos/amitparrikar/Dimension/contents/app/data/design.json', options)
        .map(res => <Array<Category>>(res.json()))
        .subscribe(designs => {
          // we've got back the raw designs save the designs data for later reference
          this.designs = designs;
          resolve(this.designs);
        });
    });
  }
}
