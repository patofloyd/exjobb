import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  // instantiate artists to an empty array
  artists: any = [];

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    // Retrieve artists from the API
    this.artistsService.getAllArtists().subscribe(artists => {
      this.artists = artists;
    });
  }

}
