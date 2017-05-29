import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailsComponent } from './albums/albums-details.component';
import { AlbumsService } from './albums.service';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistsService } from './artists.service';
import { FiltersService } from './filters.service';
import { FiltersComponent } from './filters/filters.component';
import { AboutComponent } from './about/about.component';
import { AboutService } from './about.service';

import { PagerService } from './_services/index';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'albums',
    pathMatch: 'full'
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'albums/:id', 
    component: AlbumsDetailsComponent
  },
  {
    path: 'artists',
    component: ArtistsComponent // Page under construction
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumsDetailsComponent,
    FiltersComponent,
    ArtistsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [AlbumsService, ArtistsService, FiltersService, AboutService, PagerService], // Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
