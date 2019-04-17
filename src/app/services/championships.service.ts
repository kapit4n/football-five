
import {throwError as observableThrowError, 
	Observable
,  of } from 'rxjs';

import { Injectable } from '@angular/core';
import { ConfService } from './conf.service';

import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { map, take, filter } from 'rxjs/operators'

interface Championship {
	id: number;
	name: string;
	img: string;
	description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChampionshipsService {
	
  /** Championship list*/
  championships: any;
  
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
	list(): any {
		return this.championships;
	}

  /**
   * Gets the list of championships
   */
	getChampionships(): Observable<any> {
		return this.http.get(this.confSvc.championshipsUrl());
	}

  /**
   * Gets Championship by Id
   */
	getChampionshipById(id: string): Observable<Championship[]> {
		return (this.http.get(this.confSvc.championshipsUrl()) as Observable<Championship[]>);
	}
	
	/**
   * Gets First Championship by Id
   */
	getChampionshipFirst(): Observable<any> {
		return this.http.get(this.confSvc.championshipsUrl()).map((response: Response) => {
			return <any>response.json()/*.sort((x, y) => y.order - x.order)*/[0];
		}).catch(this.handleError);
	}

  /**
   * Gets Championship Standings by Championship Id
   */
	getStandingsById(id: any): Observable<any> {
		return this.http.get(this.jsonStandingsURL.replace("@id", id));
	}

  /**
   * Gets Matches Standings by Championship Id
   */
	getMatchesById(id: any): Observable<any> {
		return this.http.get(this.jsonMatchesURL.replace("@id", id));
	}



  /** 
   * Handles the response erros
   */
	private handleError(errorResponse: Response) {
		return observableThrowError(errorResponse.json || "Server error");
	}
}
