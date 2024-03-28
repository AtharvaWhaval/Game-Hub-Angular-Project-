import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application/application.service';
// import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: any | undefined;
  upcomingGames: any;
  currentSlideIndex: number = 0;
  responsiveOptions: any[] | undefined;
  gameGenreList: any;
  genre!: any;

  constructor(
    private router: Router,
    private service: ApplicationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setUpcomingGamesList();
    this.setGamesGenreList();

    // this.gameGenreList.forEach((g: any) => {
    //   if (g.name == this.activatedRoute.snapshot.params['genreName']) {
    //     this.genre = g;
    //   }
    // });
  }

  changeSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  nextSlide(): void {
    if (this.currentSlideIndex < this.upcomingGames.length - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }
  }

  prevSlide(): void {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = this.upcomingGames.length - 1;
    }
  }
  // openGenrePage() {
  //   this.router.navigate(['/game-genre-cards']);
  // }

  setUpcomingGamesList() {
    this.service.getUpcomingGames().subscribe({
      next: (res: any) => {
        // console.log(res);

        this.upcomingGames = res;
      },
      error: console.log,
    });
  }

  setGamesGenreList() {
    this.service.getGenres().subscribe({
      next: (res: any) => {
        console.log(res);

        this.gameGenreList = res;
      },
      error: console.log,
    });
  }
}
