import { Component, OnInit } from '@angular/core';

import { ChampionshipsService } from './services/championships.service';

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

	constructor(private championshipsSvc: ChampionshipsService) {
		
	}

	ngOnInit() {
		this.championships = this.championshipsSvc.getAll();
	}

}
