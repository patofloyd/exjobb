import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsDetailsComponent implements OnInit {
	// instantiate albums to an empty array
  private sub:any;
  private albumsFiltered:string[];

  constructor(private albumsService: AlbumsService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {

        let id = params['id'];
       // Retrieve Pet with Id route param
        this.albumsService.specialAlbums(id).subscribe(albumsFiltered => this.albumsFiltered = albumsFiltered);
    });
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

}
