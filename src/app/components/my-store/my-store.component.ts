import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application/application.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.css'],
})
export class MyStoreComponent implements OnInit {
  loggedInUser: any;
  userId!: number;
  downloadedGames: any;
  constructor(
    private service: AuthService,
    private appService: ApplicationService
  ) {}

  ngOnInit(): void {
    this.getLoggedInUSer();
    this.getDownloadedGames();
  }

  getLoggedInUSer() {
    this.loggedInUser = this.service.getLoggedInUser();
    this.userId = this.loggedInUser.userId;
  }

  getDownloadedGames() {
    this.appService.getDownloadedGames(this.userId).subscribe({
      next: (res) => {
        console.log(res);
        this.downloadedGames = res;
      },
      error: console.log,
    });
  }

  // downloadedGames = [
  //   {
  //     gameId: '1',
  //     gameName: 'GTA',
  //     gameDescription: 'This is a game by Rockstar Games.',
  //     gameImgUrl:
  //       'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg',
  //     releasedDate: '2015-05-11',
  //   },
  //   {
  //     gameId: '1',
  //     gameName: 'GTA',
  //     gameDescription: 'This is a game by Rockstar Games.',
  //     gameImgUrl:
  //       'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg',
  //     releasedDate: '2015-05-11',
  //   },
  //   {
  //     gameId: '2',
  //     gameName: 'GTA',
  //     gameDescription: 'This is a game by Rockstar Games.',
  //     gameImgUrl:
  //       'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg',
  //     releasedDate: '2015-05-11',
  //   },
  //   {
  //     gameId: '3',
  //     gameName: 'GTA',
  //     gameDescription: 'This is a game by Rockstar Games.',
  //     gameImgUrl:
  //       'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg',
  //     releasedDate: '2015-05-11',
  //   },
  //   {
  //     gameId: '4',
  //     gameName: 'GTA',
  //     gameDescription: 'This is a game by Rockstar Games.',
  //     gameImgUrl:
  //       'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg',
  //     releasedDate: '2015-05-11',
  //   },
  // ];
}
