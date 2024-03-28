import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/services/application/application.service';

@Component({
  selector: 'app-game-genre-cards',
  templateUrl: './game-genre-cards.component.html',
  styleUrls: ['./game-genre-cards.component.css'],
})
export class GameGenreCardsComponent implements OnInit {
  //  actionGenreGames!: any;
  genreId!: any;
  specificGenreGames!: any;
  // game!: any;

  constructor(
    private service: ApplicationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.genreName = this.activatedRoute.snapshot.paramMap.get('genre-name');
    this.activatedRoute.params.subscribe((val) => {
      this.genreId = val['genreId'];
    });
    this.setGenreCards(this.genreId);
  }

  setGenreCards(genreId: number) {
    this.service.getSpecificGenreGames(genreId).subscribe({
      next: (res: any) => {
        console.log(res);

        this.specificGenreGames = res;
      },
      error: console.log,
    });
  }

  // setGenreCards() {
  //   switch (this.genreName) {
  //     case 'action': {
  //       this.service.getActionGenreCards().subscribe({
  //         next: (res: any) => {
  //           this.specificGenreGames = res;
  //         },
  //         error: console.log,
  //       });
  //       break;
  //     }
  //     case 'sports': {
  //       this.service.getSportGenreCards().subscribe({
  //         next: (res: any) => {
  //           this.specificGenreGames = res;
  //         },
  //         error: console.log,
  //       });
  //       break;
  //     }
  //     case 'strategy': {
  //       this.service.getStrategyGenreCards().subscribe({
  //         next: (res: any) => {
  //           this.specificGenreGames = res;
  //         },
  //         error: console.log,
  //       });
  //       break;
  //     }
  //     case 'racing': {
  //       this.service.getRacingGenreCards().subscribe({
  //         next: (res: any) => {
  //           this.specificGenreGames = res;
  //         },
  //         error: console.log,
  //       });
  //       break;
  //     }
  //     case 'casual': {
  //       this.service.getCasualGenreCards().subscribe({
  //         next: (res: any) => {
  //           this.specificGenreGames = res;
  //         },
  //         error: console.log,
  //       });
  //       break;
  //     }
  //     case 'simulation': {
  //       this.service.getSimulationGenreCards().subscribe({
  //         next: (res: any) => {
  //           this.specificGenreGames = res;
  //         },
  //         error: console.log,
  //       });
  //       break;
  //     }
  //   }

  //   // if (this.genreName === 'action') {
  //   //   this.service.getActionGenreCards().subscribe({
  //   //     next: (res: any) => {
  //   //       this.specificGenreGames = res;
  //   //     },
  //   //     error: console.log,
  //   //   });
  //   // }
  // }
}
