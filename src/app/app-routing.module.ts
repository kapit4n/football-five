import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionshipsService } from './services/championships.service';

const routes: Routes = [
  {
    path: 'championships',
    loadChildren: './championships/championships.module#ChampionshipsModule'
  },
  {
    path: '',
    redirectTo: 'championships',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ChampionshipsService
  ]
})
export class AppRoutingModule { }
