import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service'
import { ParamMap, Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
	selector: 'app-player-info',
	templateUrl: './player-info.component.html',
	styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
	player: any;
	id: number;
	private sub: any;

	constructor(private playerService: PlayerService, private router: Router, private route: ActivatedRoute) {
		const snapshot: RouterStateSnapshot = router.routerState.snapshot;
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			if (this.id > 0) {
				this.getPlayer(this.id);
			}
			else {
				this.getPlayer(1);
			}
		});
	}

	getPlayer(id: any): void {
		this.playerService.getPlayerById(id)
			.subscribe(player => this.player = player);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}