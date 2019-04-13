import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionshipListComponent } from './championship-list/championship-list.component';
import { ChampionshipInfoComponent } from './championship-info/championship-info.component';

const routes: Routes = [
  {
    path: 'list',
    component: ChampionshipListComponent
  },
  {
    path: 'info',
    component: ChampionshipInfoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChampionshipsRoutingModule { }
