import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.css'],
})
export class MyStoreComponent {
  constructor(private service: AuthService) {}
}
