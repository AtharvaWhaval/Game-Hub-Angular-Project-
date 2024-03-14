import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  getUpcomingGames(): Observable<any> {
    return this.http.get('http://localhost:3000/upcoming-games');
  }

  getGamesGenre(): Observable<any> {
    return this.http.get('http://localhost:3000/game-genre');
  }

  getActionGenreCards(): Observable<any> {
    return this.http.get('http://localhost:3000/actionGames');
  }

  getSportGenreCards(): Observable<any> {
    return this.http.get('http://localhost:3000/sportGames');
  }

  getStrategyGenreCards(): Observable<any> {
    return this.http.get('http://localhost:3000/strategyGames');
  }

  getRacingGenreCards(): Observable<any> {
    return this.http.get('http://localhost:3000/racingGames');
  }

  getCasualGenreCards(): Observable<any> {
    return this.http.get('http://localhost:3000/casualGames');
  }

  getSimulationGenreCards(): Observable<any> {
    return this.http.get('http://localhost:3000/simulationGames');
  }
}
