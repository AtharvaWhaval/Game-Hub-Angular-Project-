import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/services/application/application.service';

@Component({
  selector: 'app-crud-games',
  templateUrl: './crud-games.component.html',
  styleUrls: ['./crud-games.component.css'],
})
export class CrudGamesComponent implements OnInit {
  isImgUploaded: boolean = false;
  selectedImgUrl!: string;
  genres!: any;
  supportedPlatforms: number[] = [];
  gameObject!: any;

  isEditForm: boolean = false;

  generatedAlert!: string;

  parameter!: number;
  constructor(
    private fb: FormBuilder,
    private appService: ApplicationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getGenres();
    this.activatedRoute.queryParamMap.subscribe((p: any) => {
      console.log(p['params'].id);
      this.parameter = p['params'].id;
    });
    if (this.parameter) {
      this.isEditForm = true;
      this.loadGame(this.parameter);
    }
  }

  addGameForm: FormGroup = this.fb.group({
    gameName: ['', [Validators.required]],
    gameDescription: ['', [Validators.required]],
    // gameImgUrl: [''],
    releasedStatus: ['', Validators.required],
    releasedDate: ['', Validators.required],
    // platforms: this.fb.array([]),
    publisher: ['', Validators.required],
    genreId: ['', Validators.required],
  });

  loadGame(p: number) {
    this.appService.getGame(p).subscribe({
      next: (res) => {
        // console.log(res);
        this.selectedImgUrl = res.gameImgUrl;
        this.addGameForm.patchValue({
          gameName: res.gameName,
          gameDescription: res.gameDescription,
          releasedDate: res.releasedDate,
          publisher: res.publisher,
          releasedStatus: res.releasedStatus,
          genreId: res.genreId,
        });
      },
      error: console.log,
    });
  }

  get platforms() {
    return this.addGameForm.get('supportedPlatforms') as FormArray;
  }

  onCheckboxChange(event: Event, platformId: number) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.supportedPlatforms.push(platformId);
    } else {
      const index = this.supportedPlatforms.indexOf(platformId);
      if (index !== -1) {
        this.supportedPlatforms.splice(index, 1);
      }
    }
    console.log(this.supportedPlatforms); // Print the array to console
  }

  // get platforms() {
  //   return this.addGameForm.get('supportedPlatforms') as FormArray;
  // }

  // addPlatform() {
  //   this.platforms.push(this.fb.control(''));
  // }

  // deletePlatform(index: any) {
  //   this.platforms.removeAt(index);
  // }

  // img upload
  showPreview($event: any) {
    const file = $event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set the maximum width and height for the compressed image
        const maxWidth = 800;
        const maxHeight = 600;

        // Calculate the new width and height to maintain aspect ratio
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        // Resize the canvas to the new width and height
        canvas.width = width;
        canvas.height = height;

        // Draw the image onto the canvas
        ctx?.drawImage(img, 0, 0, width, height);

        // Get the Base64 string of the resized image
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7); // Adjust the quality as needed (0.7 represents 70% quality)

        // Store the Base64 string in imgSrc and selectedImg
        // this.imgSrc = compressedBase64;
        this.selectedImgUrl = compressedBase64;
        // console.log(this.selectedImgUrl);
      };

      // Set the image source to trigger the onload event
      img.src = reader.result as string;
    };

    reader.readAsDataURL(file);
    this.isImgUploaded = true;
  }

  onSubmit() {
    if (this.addGameForm.valid) {
      // console.log(this.addGameForm.value);
      this.gameObject = this.addGameForm.value;
      this.gameObject['supportedPlatformIds'] = this.supportedPlatforms;
      this.gameObject['gameImgUrl'] = this.selectedImgUrl;
      // console.log(this.gameObject);
      if (this.isEditForm) {
        this.updateGame(this.parameter, this.gameObject);
      } else {
        this.setGame(this.gameObject);
      }
    } else {
      // alert('Fill all the fields');
      this.generatedAlert = this.appService.alertMsg(
        'danger',
        'All the fields are mandatory to be filled!'
      );
      // Set a timeout to clear the alert message after 3 seconds
      setTimeout(() => {
        this.generatedAlert = '';
      }, 3000);
    }
  }

  getGenres() {
    this.appService.getGenres().subscribe({
      next: (res) => {
        console.log(res);
        this.genres = res;
      },
      error: console.log,
    });
  }

  updateGame(id: number, data: any) {
    this.appService.updateGame(id, data).subscribe({
      next: (res) => {
        // console.log(res);
        this.addGameForm.reset();
        // alert('Game updated successully!');
        this.generatedAlert = this.appService.alertMsg(
          'success',
          'Game updated successully!'
        );
        // Set a timeout to clear the alert message after 3 seconds
        setTimeout(() => {
          this.generatedAlert = '';
        }, 3000);
      },
      error: (err) => {
        this.generatedAlert = this.appService.alertMsg(
          'danger',
          ' Enter the valid data. There is some with the data you are trying to enter!'
        );
        // Set a timeout to clear the alert message after 3 seconds
        setTimeout(() => {
          this.generatedAlert = '';
        }, 3000);
      },
    });
  }

  setGame(gameObj: any) {
    this.appService.addGame(gameObj).subscribe({
      next: (res) => {
        // console.log(res);
        this.addGameForm.reset();
        // alert('Game added successfully!');
        this.generatedAlert = this.appService.alertMsg(
          'success',
          'Game added successfully!'
        );
        // Set a timeout to clear the alert message after 3 seconds
        setTimeout(() => {
          this.generatedAlert = '';
        }, 3000);
      },
      error: (err) => {
        this.generatedAlert = this.appService.alertMsg(
          'danger',
          'Enter the valid data. There is some problem with the data you are trying to enter!'
        );
        // Set a timeout to clear the alert message after 3 seconds
        setTimeout(() => {
          this.generatedAlert = '';
        }, 3000);
      },
    });
  }

  // setGame() {
  //   // console.log(this.selectedImgUrl);
  //   switch (this.addGameForm.controls['genre'].value) {
  //     case 'action':
  //       this.appService.setActionGenreCards(this.addGameForm.value).subscribe({
  //         next: (res) => {
  //           console.log(res);
  //           alert('Record added successfully in action  genre!');
  //           this.isImgUploaded = false;
  //         },
  //         error: console.log,
  //       });
  //       break;
  //     default:
  //       alert('You can add only in action genre currently! ');
  //   }
  // }
}
