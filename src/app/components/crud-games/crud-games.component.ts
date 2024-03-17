import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApplicationService } from 'src/app/services/application/application.service';

@Component({
  selector: 'app-crud-games',
  templateUrl: './crud-games.component.html',
  styleUrls: ['./crud-games.component.css'],
})
export class CrudGamesComponent {
  constructor(
    private fb: FormBuilder,
    private appService: ApplicationService
  ) {}
  addGameForm: FormGroup = this.fb.group({
    gameName: ['', [Validators.required]],
    gameDescription: ['', [Validators.required]],
    gameImgUrl: [
      'https://c4.wallpaperflare.com/wallpaper/96/92/869/game-games-2014-best-wallpaper-preview.jpg',
    ],
    releasedDate: ['', Validators.required],
    supportedPlatforms: this.fb.array([]),
    publisher: ['', Validators.required],
    genre: ['', Validators.required],
  });

  get platforms() {
    return this.addGameForm.get('supportedPlatforms') as FormArray;
  }

  addPlatform() {
    this.platforms.push(this.fb.control(''));
  }

  deletePlatform(index: any) {
    this.platforms.removeAt(index);
  }

  onSubmit() {
    if (this.addGameForm.valid) {
      //console.log(this.addGameForm.value);
      this.setGame();
    } else {
      alert('Fill all the fields');
    }
  }

  setGame() {
    switch (this.addGameForm.controls['genre'].value) {
      case 'action':
        this.appService.setActionGenreCards(this.addGameForm.value).subscribe({
          next: (res) => {
            console.log(res);
            alert('Record added successfully in action  genre!');
          },
          error: console.log,
        });
        break;
      default:
        alert('You can add only in action genre currently! ');
    }
  }
}
