import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standing-table',
  templateUrl: './standing-table.component.html',
  styleUrls: ['./standing-table.component.css']
})
export class StandingTableComponent implements OnInit {

  constructor() { }
  @Input()
  standingTeams: any[];

  ngOnInit() {
  }

}
