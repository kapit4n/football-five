import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionshipsRoutingModule } from './championships-routing.module';
import { ChampionshipListComponent } from './championship-list/championship-list.component';
import { ChampionshipInfoComponent } from './championship-info/championship-info.component';

import { ChampionshipsService } from '../services/championships.service';

import { MaterialImportsModule } from './../material-imports/material-imports.module'

import { CcommonModule } from './../ccommon/ccommon.module'

@NgModule({
  declarations: [ChampionshipListComponent, ChampionshipInfoComponent],
  imports: [
    CommonModule,
    ChampionshipsRoutingModule,
    MaterialImportsModule,
    CcommonModule
  ],
  providers: [ ChampionshipsService ]
})
export class ChampionshipsModule { }
