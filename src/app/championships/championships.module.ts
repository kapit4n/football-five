import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionshipsRoutingModule } from './championships-routing.module';
import { ChampionshipListComponent } from './championship-list/championship-list.component';
import { ChampionshipInfoComponent } from './championship-info/championship-info.component';

import { ChampionshipsService } from '../services/championships.service';

@NgModule({
  declarations: [ChampionshipListComponent, ChampionshipInfoComponent],
  imports: [
    CommonModule,
    ChampionshipsRoutingModule
  ],
  providers: [ ChampionshipsService ]
})
export class ChampionshipsModule { }
