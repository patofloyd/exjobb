import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

import * as _ from 'underscore';
import { PagerService } from '../_services/index';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  // array of all items to be paged
  private allAlbums: any = [];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private albumsService: AlbumsService, private pagerService: PagerService) { }

  ngOnInit() {
    // Retrieve albums from the API
    this.albumsService.getAllAlbums().subscribe(albums => {
      // set items to json response
      this.allAlbums = albums;
      // initialize to page 1
      this.setPage(1);
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allAlbums.length, page);

    // get current page of items
    this.pagedItems = this.allAlbums.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
