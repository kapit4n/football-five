import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'football-five';
	events = [];
	opened: boolean = true;
	championships: any[] = [];
	teams: any[];
	players: any[];
	matches: any[];



}
