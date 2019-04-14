import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportsModule } from './../material-imports/material-imports.module'

import {NewslettersComponent } from './newsletters/newsletters.component'
import { MatchVsComponent } from './match-vs/match-vs.component'
import { StandingTableGroupsComponent } from './standing-table-groups/standing-table-groups.component'
import { StandingTableComponent } from './standing-table/standing-table.component'
import { StandingSortPipe } from './standing-sort.pipe'

@NgModule({
  declarations: [
    NewslettersComponent,
    MatchVsComponent,
    StandingTableGroupsComponent,
    StandingTableComponent,
    StandingSortPipe,
  ],
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  exports: [
    NewslettersComponent,
    MatchVsComponent,
    StandingTableGroupsComponent,
    StandingTableComponent,
    StandingSortPipe,
  ]
})
export class CcommonModule { }
