
import {throwError as observableThrowError, 
	Observable,
	Subject
,  of } from 'rxjs';
import { Injectable } from '@angular/core';


import { HttpClient, HttpErrorResponse } from '@angular/common/http';



import 'rxjs/Rx'; //get everything from Rx    



@Injectable()
export class PlayerService {
  
  /** Players list*/
	players: any[];
  
  /** json URL*/
	private jsonFileURL: string = "../assets/players.json";

  /** Player service contructor*/
	constructor(private http: HttpClient) { }

  /**
   * Returns the list of players on the service
   */
	list(): any[] {
		return this.players;
	}

  /** 
   * Return a Observable with the list of players
   */
	getPlayers(): Observable<any[]> {
		return this.http.get(this.jsonFileURL).map((response: Response) => {
			return <any>response.json()
		}).catch(this.handleError);
	}

  /** 
   * Return player by id
   */
	playersByChampionship(championship: any): any[] {
		return this.players;
	}

  /**
   * Return an observable with player that match the id param
  */
	getPlayerById(id: any): Observable<any> {
		return this.http.get(this.jsonFileURL).map((response: Response) => {
			return <any>response.json()[id - 1]
		}).catch(this.handleError);
	}

  /**
   * Handles response error
   */
	private handleError(errorResponse: Response) {
		return observableThrowError(errorResponse.json || "Server error");
	}
}
