import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApplicationService } from 'src/app/services/application/application.service';
import { CrudGamesComponent } from '../crud-games/crud-games.component';

@Component({
  selector: 'app-games-crud-main',
  templateUrl: './games-crud-main.component.html',
  styleUrls: ['./games-crud-main.component.css'],
})
export class GamesCrudMainComponent implements OnInit {
  gamesList!: any;
  isModalOpen: boolean = false;
  tempDeleteGame!: any;

  generatedAlert!: string;
  constructor(private appService: ApplicationService, private router: Router) {}

  ngOnInit(): void {
    this.getGamesList();
  }

  //Toggle Modal
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  setDeletingGame(game: any) {
    // this.isModalOpen = !this.isModalOpen;
    this.toggleModal();
    this.tempDeleteGame = game;
  }

  getGamesList() {
    this.appService.getGames().subscribe({
      next: (val) => {
        // console.log(val);
        this.gamesList = val;
        // console.log(this.gamesList);
      },
      error: console.log,
    });
  }

  deleteGame(id: number) {
    this.appService.deleteGame(id).subscribe({
      next: (res: any) => {
        // alert('Game deleted.!');
        this.generatedAlert = this.appService.alertMsg(
          'success',
          'Game deleted.!'
        );
        // Set a timeout to clear the alert message after 3 seconds
        setTimeout(() => {
          this.generatedAlert = '';
        }, 3000);
        this.toggleModal();
        this.getGamesList();
      },
      error: console.log,
    });
  }
}
