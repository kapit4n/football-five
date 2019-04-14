import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-newsletters',
	templateUrl: './newsletters.component.html',
	styleUrls: ['./newsletters.component.css']
})
export class NewslettersComponent implements OnInit {

	@Input() newsletters: any[];

	constructor() { }

	ngOnInit() {
	}



}
