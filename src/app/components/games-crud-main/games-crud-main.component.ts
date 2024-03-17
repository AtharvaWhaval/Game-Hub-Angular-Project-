import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application/application.service';

@Component({
  selector: 'app-games-crud-main',
  templateUrl: './games-crud-main.component.html',
  styleUrls: ['./games-crud-main.component.css'],
})
export class GamesCrudMainComponent implements OnInit {
  gamesList!: any;
  isModalOpen: boolean = false;
  tempDeleteGame!: any;
  constructor(private appService: ApplicationService) {}

  ngOnInit(): void {
    this.getGamesList();
  }

  //Toggle Modal
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  setDeletingGame(game: any) {
    this.isModalOpen = !this.isModalOpen;
    this.tempDeleteGame = game;
  }

  getGamesList() {
    this.appService.getActionGenreCards().subscribe({
      next: (val) => {
        this.gamesList = val;
        console.log(this.gamesList);
      },
      error: console.log,
    });
  }

  deleteGame(id: number) {
    this.appService.deleteGame(id).subscribe({
      next: (res: any) => {
        alert('Game deleted.!');
        this.toggleModal();
        this.getGamesList();
      },
      error: console.log,
    });
  }
}
