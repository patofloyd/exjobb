import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
	// instantiate albums to an empty array
  albums: any = [];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    // Retrieve albums from the API
    this.albumsService.getAllAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

}
