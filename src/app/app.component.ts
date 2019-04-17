import { Component, OnInit } from '@angular/core';

import { ChampionshipsService } from './services/championships.service';
import { TeamService } from './services/team.service'
import { PlayerService } from './services/player.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'football-five';
	events = [];
	opened: boolean = true;
	championships: any[] = [];
	teams: any[];
	players: any[];
	matches: any[];

	constructor(private championshipService: ChampionshipsService, 
		private teamService: TeamService, private playerService: PlayerService) {
		console.log("APPPPPPPPPPPPPP");
	}

	ngOnInit() {
		this.getChampionships();
		this.getTeams();
		this.getPlayers();
	}

	getChampionships(): void {
		this.championshipService.getChampionships()
			.subscribe(championship => {
				this.championships = championship;
				console.log(this.championships);
			});
	}

	getTeams(): void {
		this.teamService.getTeams()
			.subscribe(team => {
				this.teams = team;
				console.log(this.teams);
			});
	}

	getPlayers(): void {
		this.playerService.getPlayers()
			.subscribe(player => {
				this.players = player;
				console.log(this.players);
			});
	}


}
