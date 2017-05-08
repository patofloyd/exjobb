import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsService } from './albums.service';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistsService } from './artists.service';


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
    path: 'artists',
    component: ArtistsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [AlbumsService, ArtistsService], // Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
