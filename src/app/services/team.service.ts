
import {throwError as observableThrowError, 
	Observable,
	Subject
} from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface Team {
  id: number;
  name: string;
  img: string;
  biography: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  /** Team list */
  teams: any[];

  /** json URL */
  private jsonFileURL: string = "../assets/teams.json";
  
  private jsonFileByIdURL: string = "../assets/teams_@id.json";

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
  getTeamById(id: any): Observable<Team[]> {
    return this.http.get(this.jsonFileURL) as Observable<Team[]>;
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
  getTeams(): Observable<Team[]> {
    return this.http.get(this.jsonFileURL) as Observable<Team[]>;
  }

}
