import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllArtists() {
    return this.http.get('/drupal/artists')
      .map(res => res.json());
  }

}
