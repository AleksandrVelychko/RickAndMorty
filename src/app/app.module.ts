import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodesWindowComponent } from './components/episodes-window/episodes-window.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    EpisodesWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [
    EpisodesWindowComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
