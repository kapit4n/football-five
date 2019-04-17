import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamInfoComponent } from './team-info/team-info.component';

const routes: Routes = [
  {
    path: '',
    component: TeamListComponent
  },
  {
    path: ':id',
    component: TeamInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
