import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standing-table-groups',
  templateUrl: './standing-table-groups.component.html',
  styleUrls: ['./standing-table-groups.component.css']
})
export class StandingTableGroupsComponent implements OnInit {

  constructor() { }
  @Input()
  standingGroups: any[];

  ngOnInit() {
  }

}
