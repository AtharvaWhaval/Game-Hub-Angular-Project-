import { HttpClient } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  // Dotnet Api's Start
  getGames(): Observable<any> {
    return this.http.get('https://localhost:7095/api/Games/GetGames');
  }
  getUpcomingGames(): Observable<any> {
    return this.http.get('https://localhost:7095/api/Games/GetUpcomingGames');
  }
  getGenres(): Observable<any> {
    return this.http.get('https://localhost:7095/api/GameGenres/GameGenres');
  }
  getSpecificGenreGames(genId: number): Observable<any> {
    return this.http.get(
      `https://localhost:7095/api/Games/GetGenreGames/${genId}`
    );
  }
  getGame(gameId: number): Observable<any> {
    return this.http.get(`https://localhost:7095/api/Games/GetGame/${gameId}`);
  }
  addGame(game: any): Observable<any> {
    return this.http.post('https://localhost:7095/api/Games/AddGame', game);
  }
  updateGame(gameId: number, game: any): Observable<any> {
    return this.http.put(
      `https://localhost:7095/api/Games/UpdateGame/${gameId}`,
      game
    );
  }
  deleteGame(gameId: number): Observable<any> {
    return this.http.delete(
      `https://localhost:7095/api/Games/DeleteGame/${gameId}`,
      { responseType: 'text' }
    );
  }
  // to get the games downloaded by respective user
  getDownloadedGames(userId: number): Observable<any> {
    return this.http.get(
      `https://localhost:7095/api/DownloadHistories/${userId}/games`
    );
  }

  downloadGame(data: any) {
    return this.http.post(
      `https://localhost:7095/api/DownloadHistories/downloadGame`,
      data
    );
  }

  uninstallGame(userId: number, gameId: number) {
    return this.http.delete(
      `https://localhost:7095/api/DownloadHistories/uninstallGame/${userId}/${gameId}`
    );
  }
  // End

  // Alert Service
  alertMsg(type: string, msg: string) {
    return `<div class="alert alert-${type}" role="alert">
    ${msg}
  </div>`;
  }

  // getUpcomingGames(): Observable<any> {
  //   return this.http.get('http://localhost:3000/upcoming-games');
  // }

  // getGamesGenre(): Observable<any> {
  //   return this.http.get('http://localhost:3000/game-genre');
  // }

  // getActionGenreCards(): Observable<any> {
  //   return this.http.get('http://localhost:3000/actionGames');
  // }
  // setActionGenreCards(data: any) {
  //   return this.http.post('http://localhost:3000/actionGames', data);
  // }
  // deleteGame(id: number) {
  //   return this.http.delete(`http://localhost:3000/actionGames/${id}`);
  // }
  // updateGAme(id: number, data: any) {
  //   return this.http.put(`http://localhost:3000/actionGames/${id}`, data);
  // }

  // getSportGenreCards(): Observable<any> {
  //   return this.http.get('http://localhost:3000/sportGames');
  // }

  // getStrategyGenreCards(): Observable<any> {
  //   return this.http.get('http://localhost:3000/strategyGames');
  // }

  // getRacingGenreCards(): Observable<any> {
  //   return this.http.get('http://localhost:3000/racingGames');
  // }

  // getCasualGenreCards(): Observable<any> {
  //   return this.http.get('http://localhost:3000/casualGames');
  // }

  // getSimulationGenreCards(): Observable<any> {
  //   return this.http.get('http://localhost:3000/simulationGames');
  // }
}
