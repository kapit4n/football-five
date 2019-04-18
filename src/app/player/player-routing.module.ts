import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerInfoComponent } from './player-info/player-info.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerListComponent
  },
  {
    path: ':id',
    component: PlayerInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
