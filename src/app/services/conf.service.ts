import { Injectable } from '@angular/core';

@Injectable()
export class ConfService {

  championship: any;

  fromAssets = true;

  private championshipsAssetURL: string = "../assets/championships.json";
  private championshipsAssetByIdURL: string = "../assets/championship_1.json";
	private jsonStandingsURL: string = "../assets/championship_@id_standings.json";
	private jsonMatchesURL: string = "../assets/championship_@id_matches.json";
  
  private baseUrl: string = "http://localhost:3000/api";
  private teamsApiUrl: string = "teams";
  private championshipsApiUrl: string = "championships";
  
  public teamsUrl() {
    if (this.fromAssets) {
      return this.championshipsAssetURL;
    }
    return this.baseUrl + "/" + this.teamsApiUrl;
  }
  
  public championshipsUrl() {
    if (this.fromAssets) {
      return this.championshipsAssetURL;
    }
    return this.baseUrl + "/" + this.championshipsApiUrl;
  }
  
  public championshipsByIdUrl() {
    if (this.fromAssets) {
      return this.championshipsAssetByIdURL;
    }
    return this.baseUrl + "/" + this.championshipsApiUrl;
  }

  constructor() {
    this.championship = {
      displayStandings: true,
      displayMatches: true,
      displayNews: true
    }
  }

}
