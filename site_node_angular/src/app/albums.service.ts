import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AlbumsService {

	private albumsUrl = '/drupal/albums';

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllAlbums() {
    return this.http.get(this.albumsUrl)
      .map(res => res.json());
  }
  specialAlbums(id: string) {

    // Return response
    return this.http.get(this.albumsUrl + '/' + id)
      .map(res => res.json());
  }

}
