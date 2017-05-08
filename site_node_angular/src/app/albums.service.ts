import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AlbumsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllAlbums() {
    return this.http.get('/drupal/albums')
      .map(res => res.json());
  }

}
