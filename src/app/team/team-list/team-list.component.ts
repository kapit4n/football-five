import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service'

@Component({
	selector: 'app-team-list',
	templateUrl: './team-list.component.html',
	styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  /** Teams array */
	teams: any;
  /** Error message info */
	errorMessage: string;

	constructor(private teamService: TeamService) {
	}

  /** Load the team list from service */
	ngOnInit() {
		this.teamService.getTeams().subscribe(teams => {
			this.teams = teams;
		},
		error => this.errorMessage = <any>error);
	}
}
