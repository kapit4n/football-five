import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerInfoComponent } from './player-info/player-info.component';

import { MaterialImportsModule } from './../material-imports/material-imports.module'

import { CcommonModule } from './../ccommon/ccommon.module'

@NgModule({
  declarations: [PlayerListComponent, PlayerInfoComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MaterialImportsModule,
    CcommonModule
  ]
})
export class PlayerModule { }
