import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-vs',
  templateUrl: './match-vs.component.html',
  styleUrls: ['./match-vs.component.css']
})
export class MatchVsComponent implements OnInit {

    @Input() match: any;
  constructor() {
    this.match = {};
  }

  ngOnInit() {
  }

}
