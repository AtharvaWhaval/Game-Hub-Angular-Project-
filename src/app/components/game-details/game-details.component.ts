import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/services/application/application.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit, DoCheck {
  gameGenre!: any;
  gameId!: any;
  specificGenreGames!: any;
  game!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ApplicationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val) => {
      this.gameGenre = val['genrename'];
      this.gameId = val['gameId'];
      // console.log(this.gameGenre);
      // console.log(this.gameId);
      // Find out the game from Array
    });
    this.setGenreCards();

    //checking for specific game
    // this.specificGenreGames.forEach((g: any) => {
    //   if (g.id === this.gameId) {
    //     this.game = g;
    //   }
    // });
    // console.log(this.game);
  }

  // ngAfterViewInit(): void {
  //   this.specificGenreGames.forEach((g: any) => {
  //     if (g.id === this.gameId) {
  //       this.game = g;
  //     }
  //   });
  //   console.log(this.game);
  // }

  ngDoCheck() {
    this.specificGenreGames.forEach((g: any) => {
      if (g.id === this.gameId) {
        this.game = g;
      }
    });
    console.log(this.game);
  }

  setGenreCards() {
    switch (this.gameGenre) {
      case 'action': {
        this.service.getActionGenreCards().subscribe({
          next: (res: any) => {
            this.specificGenreGames = res;
          },
          error: console.log,
        });
        break;
      }
      case 'sports': {
        this.service.getSportGenreCards().subscribe({
          next: (res: any) => {
            this.specificGenreGames = res;
          },
          error: console.log,
        });
        break;
      }
      case 'strategy': {
        this.service.getStrategyGenreCards().subscribe({
          next: (res: any) => {
            this.specificGenreGames = res;
          },
          error: console.log,
        });
        break;
      }
      case 'racing': {
        this.service.getRacingGenreCards().subscribe({
          next: (res: any) => {
            this.specificGenreGames = res;
          },
          error: console.log,
        });
        break;
      }
      case 'casual': {
        this.service.getCasualGenreCards().subscribe({
          next: (res: any) => {
            this.specificGenreGames = res;
          },
          error: console.log,
        });
        break;
      }
      case 'simulation': {
        this.service.getSimulationGenreCards().subscribe({
          next: (res: any) => {
            this.specificGenreGames = res;
          },
          error: console.log,
        });
        break;
      }
    }

    // if (this.genreName === 'action') {
    //   this.service.getActionGenreCards().subscribe({
    //     next: (res: any) => {
    //       this.specificGenreGames = res;
    //     },
    //     error: console.log,
    //   });
    // }
  }
}
