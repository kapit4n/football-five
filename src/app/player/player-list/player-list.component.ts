import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: any[];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(data => {
			this.players = data;
		});
  }

}
