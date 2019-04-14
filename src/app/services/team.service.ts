
import {throwError as observableThrowError, 
	Observable,
	Subject
} from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';


import 'rxjs/Rx'; //get everything from Rx    


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  /** Team list */
  teams: any[];

  /** json URL */
  private jsonFileURL: string = "../assets/teams.json";

  /** json URL */
  private jsonPlayersURL: string = "../assets/teams_@id_players.json";

  /** Team service constructor */
  constructor(private http: HttpClient) {}

  /**
   * Returns the list of teams
   */
  list(): any[] {
    return this.teams;
  }

  /**
   * Return team by championship
   */
  teamsByChampionship(championship: any): any[] {
    return this.teams;
  }

  /**
   * Return an observable with the yeam that matches the id
   */
  getTeamById(id: any): Observable<any> {
    return this.http
      .get(this.jsonFileURL)
      .map((response: Response) => {
        return <any>response.json()[id - 1];
      })
      .catch(this.handleError);
  }

  /**
   * Gets players by Team Id
   */
  getPlayersById(id: any): Observable<any> {
    return this.http.get(this.jsonPlayersURL.replace("@id", id));
  }

  /**
   * Return an observable with the list of teams
   */
  getTeams(): Observable<any> {
    return this.http
      .get(this.jsonFileURL)
      .map((response: Response) => {
        return <any>response.json();
      })
      .catch(this.handleError);
  }

  /** Handles the response error */
  private handleError(errorResponse: Response) {
    console.log(errorResponse.statusText);
    return observableThrowError(errorResponse.json || "Server error");
  }
}
