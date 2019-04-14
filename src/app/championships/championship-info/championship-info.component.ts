import { Component, OnInit } from '@angular/core';
import { ChampionshipsService } from '../../services/championships.service'
import { ParamMap, Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-championship-info',
  templateUrl: './championship-info.component.html',
  styleUrls: ['./championship-info.component.css']
})
export class ChampionshipInfoComponent implements OnInit {

	championship: any;
	standingGroups: any[];
	matches: any[];
	id: number;
	private sub: any;

	constructor(private championshipService: ChampionshipsService, private router: Router, private route: ActivatedRoute) {
		const snapshot: RouterStateSnapshot = router.routerState.snapshot;
		this.championship = {};
		this.standingGroups = [];
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			if (this.id > 0) {
				this.getChampionship(this.id);
				this.getMatches(this.id);
				this.getStandings(this.id);
			}
			else {
				this.getChampionshipFirst();
			}
		});
	}

	getChampionship(id: any): void {
		this.championshipService.getChampionshipById(id)
			.subscribe(championship => {
				this.championship = championship;
			});
	}
	

	getChampionshipFirst(): void {
		this.championshipService.getChampionshipFirst()
			.subscribe(championship => {
				this.championship = championship;
				this.getMatches(this.championship.id);
				this.getStandings(this.championship.id);
			});
	}
	
	getStandings(id: any): void {
		this.championshipService.getStandingsById(id)
			.subscribe(standingGroups => {
				this.standingGroups = standingGroups;
			});
	}

	getMatches(id: any): void {
		this.championshipService.getMatchesById(id)
			.subscribe(matches => {
				this.matches = matches;
			});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
