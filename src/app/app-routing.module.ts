import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Authentication Components/login/login.component';
import { SignupComponent } from './components/Authentication Components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { GameGenreCardsComponent } from './components/game-genre-cards/game-genre-cards.component';
import { CanActivate } from './guards/auth-guard';
import { NotFoundComponent } from './components/Authentication Components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { MyStoreComponent } from './components/my-store/my-store.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CrudGamesComponent } from './components/crud-games/crud-games.component';
import { GamesCrudMainComponent } from './components/games-crud-main/games-crud-main.component';
import { CanActivateAdminPanel } from './guards/admin-guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'prefix',
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [CanActivate],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        // children: [
        //   {
        //     path: 'game-genre-cards/:genrename',
        //     component: GameGenreCardsComponent,
        //   },
        // ],
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix',
      },
      {
        path: 'home/game-genre-cards/:genreId',
        component: GameGenreCardsComponent,
      },
      {
        path: 'home/game-genre-cards/:genrename/game-details/:gameId',
        component: GameDetailsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'myStore',
        component: MyStoreComponent,
      },
      {
        path: 'adminPanel',
        component: AdminPanelComponent,
        canActivate: [CanActivateAdminPanel],
      },
      {
        path: 'adminPanel/addGames',
        component: CrudGamesComponent,
      },
      {
        path: 'adminPanel/gamesCrudMain',
        component: GamesCrudMainComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
