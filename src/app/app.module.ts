import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChampionshipsService } from './services/championships.service';
import { ConfService } from './services/conf.service';
import { PlayerService } from './services/player.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConfService, ChampionshipsService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
