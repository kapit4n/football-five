import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionshipsRoutingModule } from './championships-routing.module';
import { ChampionshipListComponent } from './championship-list/championship-list.component';
import { ChampionshipInfoComponent } from './championship-info/championship-info.component';

@NgModule({
  declarations: [ChampionshipListComponent, ChampionshipInfoComponent],
  imports: [
    CommonModule,
    ChampionshipsRoutingModule
  ]
})
export class ChampionshipsModule { }
