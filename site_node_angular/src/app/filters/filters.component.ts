import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  // instantiate artists to an empty array
  artists: any = [];
  formats: any = [];
  genres: any = [];

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
    // Retrieve artists from the API
    this.filtersService.getArtists().subscribe(artists => {
      this.artists = artists;
    });
    this.filtersService.getMusicFormat().subscribe(formats => {
      this.formats = formats;
    });
    this.filtersService.getMusicGenres().subscribe(genres => {
      this.genres = genres;
    });
  }

}
