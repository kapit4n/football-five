import { Injectable } from '@angular/core';

import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

import { Championship } from './../model/championship'
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx'; //get everything from Rx    


import { ConfService } from './../services/conf.service'

@Injectable({
  providedIn: 'root'
})
export class ChampionshipsService {
	
  /** Championship list*/
  championships: any[];
  
  /** json file URL */
	private jsonFileURL: string = "../assets/championships.json";
	private jsonStandingsURL: string = "../assets/championship_@id_standings.json";
	private jsonMatchesURL: string = "../assets/championship_@id_matches.json";

  /**
   * Championship constructor
   */
	constructor(private http: HttpClient, private confSvc: ConfService) {
	}

  /**
   * Returns the champhionship list
   */
	list(): any[] {
		return this.championships;
	}

  /**
   * Gets the list of championships
   */
	getAll(): Observable<any[]> {
		return this.http.get(this.confSvc.championshipsUrl()) as Observable<any[]>;
	}

  /**
   * Gets Championship by Id
   */
	getChampionshipById(id: any): Observable<any> {
		return this.http.get(this.confSvc.championshipsByIdUrl());
	}
	
	/**
   * Gets First Championship by Id
   */
	getChampionshipFirst(): Observable<any> {
		return this.http.get(this.confSvc.championshipsByIdUrl());
	}

  /**
   * Gets Championship Standings by Championship Id
   */
	getStandingsById(id: any): Observable<any[]> {
		return this.http.get(this.jsonStandingsURL.replace("@id", id)) as Observable<any[]>;
	}

  /**
   * Gets Matches Standings by Championship Id
   */
	getMatchesById(id: any): Observable<any[]> {
		return this.http.get(this.jsonMatchesURL.replace("@id", id)) as Observable<any[]>;
	}
}
