import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/services/application/application.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  // gameGenre!: any;
  gameId!: any;
  specificGenreGames!: any;
  game!: any;
  currentGame!: any;
  downloadObj: any;
  loggedInUser: any;
  userId!: number;

  installButtonText: string = 'Install';

  generatedAlert!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ApplicationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val) => {
      // this.gameGenre = val['genrename'];
      this.gameId = val['gameId'];
      // console.log(val);
      // console.log(this.gameGenre);
      // console.log(this.gameId);
      // Find out the game from Array
    });
    // this.setGenreCards();
    this.setGame(this.gameId);
    this.getLoggedinUser();

    // Check if the game is already downloaded for the current user
    this.checkGameDownloadStatus();

    //checking for specific game
    // this.specificGenreGames.forEach((g: any) => {
    //   if (g.id === this.gameId) {
    //     this.game = g;
    //   }
    // });
    // console.log(this.game);
  }

  checkGameDownloadStatus() {
    // Make API call to get downloaded games for the current user
    this.service.getDownloadedGames(this.userId).subscribe({
      next: (res: any) => {
        // console.log(res);

        const downloadedGames = res as any[]; // Assuming the API response is an array of downloaded games
        console.log(downloadedGames);

        // Log each game object in downloadedGames array
        downloadedGames.forEach((g) => console.log(g));

        // Check if the current game is in the list of downloaded games
        const isGameDownloaded = downloadedGames.some(
          (g) => g.gameId === Number(this.gameId)
        );
        // const isGameDownloaded = downloadedGames.some((game) => {
        //   console.log('Comparing:', typeof game.gameId, typeof this.gameId);
        //   return game.gameId === this.gameId;
        // });

        console.log(this.gameId);
        console.log(isGameDownloaded);

        if (isGameDownloaded) {
          this.installButtonText = 'Uninstall';
        }
      },
      error: console.error, // Handle error
    });
  }

  setGame(gameID: number) {
    this.service.getGame(gameID).subscribe({
      next: (res) => {
        // console.log(res);

        this.currentGame = res;
      },
      error: console.log,
    });
  }

  getLoggedinUser() {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.userId = this.loggedInUser.userId;
  }

  onDownloadClick() {
    // this.downloadObj = {
    //   userId: this.userId,
    //   gameId: this.gameId,
    // };
    // this.service.downloadGame(this.downloadObj).subscribe({
    //   next: (res) => {
    //     alert('Game Downloaded Successfully!');
    //   },
    //   error: console.log,
    // });
    if (this.installButtonText === 'Install') {
      // Install the game
      this.installGame();
    } else {
      // Uninstall the game
      this.uninstallGame();
    }
  }

  installGame() {
    // Existing install game logic...
    this.downloadObj = {
      userId: this.userId,
      gameId: this.gameId,
    };
    this.service.downloadGame(this.downloadObj).subscribe({
      next: (res) => {
        // alert('Game Downloaded Successfully!');
        this.generatedAlert = this.service.alertMsg(
          'success',
          'Game Installed Successfully!'
        );
        // Set a timeout to clear the alert message after 3 seconds
        setTimeout(() => {
          this.generatedAlert = '';
        }, 3000);
      },
      error: console.log,
    });
    // After successful installation, update button text

    this.installButtonText = 'Uninstall';
  }

  uninstallGame() {
    // Existing uninstall game logic...
    this.service.uninstallGame(this.userId, this.gameId).subscribe({
      next: (res) => {
        // alert('Game Uninstalled!');
        this.generatedAlert = this.service.alertMsg(
          'success',
          'Game Uninstalled!'
        );
        // Set a timeout to clear the alert message after 3 seconds
        setTimeout(() => {
          this.generatedAlert = '';
        }, 3000);
      },
      error: console.log,
    });
    // After successful uninstallation, update button text
    this.installButtonText = 'Install';
  }

  // ngAfterViewInit(): void {
  //   this.specificGenreGames.forEach((g: any) => {
  //     if (g.id === this.gameId) {
  //       this.game = g;
  //     }
  //   });
  //   console.log(this.game);
  // }

  // ngDoCheck() {
  //   this.specificGenreGames.forEach((g: any) => {
  //     if (g.id === this.gameId) {
  //       this.game = g;
  //     }
  //   });
  //   console.log(this.game);
  // }

  // setGenreCards() {
  //   switch (this.gameGenre) {
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
