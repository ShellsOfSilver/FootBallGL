import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()

export class GetFootBallDataServise {
  private token = '7d8d16ccbd9c45d0a354ad6132133373';
  private competitionURL = 'http://api.football-data.org/v2/competitions/';
  private matchListURL;

  constructor(private _http: HttpClient) {}

  getCompetition() {
    return this._http.get(
      this.competitionURL, ({headers: {'X-Auth-Token': this.token}})
    );
  }
  getMatchList(i) {
    this.matchListURL = `http://api.football-data.org/v2/competitions/` + i + `/matches`;
    return this._http.get(
      this.matchListURL, ({headers: {'X-Auth-Token': this.token}})
    );
  }
  getLocalMatchList() {
    return this._http.get('http://localhost:3000/matches');
  }

}
