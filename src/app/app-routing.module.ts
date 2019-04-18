import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'championships',
    loadChildren: './championships/championships.module#ChampionshipsModule'
  },
  {
    path: 'teams',
    loadChildren: './team/team.module#TeamModule'
  },
  {
    path: 'players',
    loadChildren: './player/player.module#PlayerModule'
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
  ]
})
export class AppRoutingModule { }
