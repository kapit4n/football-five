import { Component, OnInit } from '@angular/core';
import { ChampionshipsService } from '../../services/championships.service'

@Component({
  selector: 'app-championship-list',
  templateUrl: './championship-list.component.html',
  styleUrls: ['./championship-list.component.css']
})
export class ChampionshipListComponent implements OnInit {

  championships: any[] = [];
  constructor(private championshipSvc: ChampionshipsService) {

  }

  ngOnInit() {
    this.championshipSvc.getChampionships().subscribe(data => {
      this.championships = data;
    })
  }

}
