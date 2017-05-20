import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {

  constructor(private http: Http) { }

  getAbout() {
    return this.http.get('/drupal/about')
      .map(res => res.json());
  }
}
