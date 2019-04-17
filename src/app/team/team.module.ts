import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamInfoComponent } from './team-info/team-info.component';

import { MaterialImportsModule } from './../material-imports/material-imports.module'

import { CcommonModule } from './../ccommon/ccommon.module'

@NgModule({
  declarations: [TeamListComponent, TeamInfoComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    CcommonModule,
    MaterialImportsModule
  ]
})
export class TeamModule { }
