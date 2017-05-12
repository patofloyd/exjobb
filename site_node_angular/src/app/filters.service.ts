import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FiltersService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getArtists() {
    return this.http.get('/drupal/artists')
      .map(res => res.json());
  }
  getMusicStyles() {
    return this.http.get('/drupal/musicstyles')
      .map(res => res.json());
  }
  getMusicFormat() {
    return this.http.get('/drupal/musicformat')
      .map(res => res.json());
  }

}
