import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  gameGenre: any;

  constructor(private router:Router) {}

  ngOnInit() {
    this.upcomingGames = [
      {
        gameName: 'Example Game 1',
        gameImg:
          'https://i.pcmag.com/imagery/roundups/07sBMitXcz0UXdYU6LowlQt-2.fit_lim.size_850x490.v1648837830.jpg',
        gameDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel justo nec est laoreet convallis.',
        gamePrice: 49.99,
      },
      {
        gameName: 'Example Game 2',
        gameImg:
          'https://www.lifewire.com/thmb/vjMFGVMCiuNWuvxqlqarbBmOFkk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/offlinecars-asphalt8-5bf393bb46e0fb002650eb20.jpg',
        gameDescription:
          'Sed euismod sem ut ligula dictum, a efficitur ligula sollicitudin. In hac habitasse platea dictumst.',
        gamePrice: 59.99,
      },
      {
        gameName: 'Example Game 3',
        gameImg:
          'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/04/07/best-mobile-games.jpg',
        gameDescription:
          'Nulla facilisi. Sed commodo dui id ullamcorper fringilla. Fusce auctor elit id tortor vestibulum tincidunt.',
        gamePrice: 39.99,
      },
      {
        gameName: 'Example Game 4',
        gameImg:
          'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/04/07/best-mobile-games.jpg',
        gameDescription:
          'Nulla facilisi. Sed commodo dui id ullamcorper fringilla. Fusce auctor elit id tortor vestibulum tincidunt.',
        gamePrice: 39.99,
      },
      // Add more game entries as needed
    ];

    this.gameGenre = [
      {
        genreImg: 'https://sugargamers.com/wp-content/uploads/2021/12/video-game-genras.jpeg',
        genreName: 'action'
      },
      {
        genreImg: 'https://staticg.sportskeeda.com/editor/2023/04/256fe-16804360547860-1920.jpg?w=840',
        genreName: 'sports'
      },
      {
        genreImg: 'https://media.altchar.com/prod/images/940_530/gm-2bab8831-48c8-44ca-84fb-b62ef98c637b-thebeststrategygamesofalltime.jpeg',
        genreName: 'strategy'
      },
      {
        genreImg: 'https://media.altchar.com/prod/images/gm_article_promo_image/23254e571e9e-racing.jpg',
        genreName: 'racing'
      },
      {
        genreImg: 'https://i0.wp.com/workingcasual.com/wp-content/uploads/2023/12/Video-Game-Releases-Collage-2023.jpg?resize=980%2C551&ssl=1',
        genreName: 'casual'
      },
      {
        genreImg: 'https://i.ebayimg.com/thumbs/images/g/fIwAAOSw~eVlXP8A/s-l640.jpg',
        genreName: 'simulation'
      },
    ]
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
  openGenrePage() {
    this.router.navigate(['/game-genre-cards'])
  }
}
