import { Injectable } from '@angular/core';

import { Championship } from './../model/championship'

@Injectable({
  providedIn: 'root'
})
export class ChampionshipsService {

  private list: Championship[] = [
    {
      id: 1,
      name: 'UEFA Champions League',
      src: "https://images-na.ssl-images-amazon.com/images/I/71jO3f9-T5L._SY355_.png"
    },
    
    {
      id: 2,
      name: 'La liga',
      src: "https://images-na.ssl-images-amazon.com/images/I/71jO3f9-T5L._SY355_.png"
    },

  ];

  constructor() { }

  getAll() {
    return this.list;
  }
}
