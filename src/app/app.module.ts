import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GameGenreCardsComponent } from './components/game-genre-cards/game-genre-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/Authentication Components/login/login.component';
import { SignupComponent } from './components/Authentication Components/signup/signup.component';
import { IndexComponent } from './components/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/Authentication Components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { MyStoreComponent } from './components/my-store/my-store.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CrudGamesComponent } from './components/crud-games/crud-games.component';
import { GamesCrudMainComponent } from './components/games-crud-main/games-crud-main.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GameGenreCardsComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    IndexComponent,
    NotFoundComponent,
    ProfileComponent,
    AboutComponent,
    MyStoreComponent,
    GameDetailsComponent,
    AdminPanelComponent,
    CrudGamesComponent,
    GamesCrudMainComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
