import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {
	localTeam1 = {
		name: "Barcelona", img: "http://www.scotzine.com/wp-content/uploads/fc-barcelona-wallpaper.jpg"
	}

	visitTeam1 = {
		name: "Real Madrid", img: "http://fcnaija.com/public/images/22e054c7353fef5c3c51de7122125971.jpg"
	}

	localTeam2 = {
		name: "Valencia", img: "http://4.bp.blogspot.com/-k-bQKvG2urI/TXFWQwXuomI/AAAAAAAAAUE/tlTITNNutTE/s1600/Valencia_Cf_Logo.jpg"
	}

	visitTeam2 = {
		name: "Villareal", img: "https://pbs.twimg.com/profile_images/921308769128275969/kH_49SSr_400x400.jpg"
	}

	matches: any[] = [
		{
			localTeam: this.localTeam1, visitTeam: this.visitTeam1, localGoal: 0, visitGoal: 0, matchDate: new Date()
		},
		{
			localTeam: this.localTeam2, visitTeam: this.visitTeam2, localGoal: 0, visitGoal: 0, matchDate: new Date()
		}

	];
	constructor() { }

	list(): any[] {
		return this.matches;
	}

	matchesByChampionship(championship: any): any[] {
		return this.matches;
	}
}
