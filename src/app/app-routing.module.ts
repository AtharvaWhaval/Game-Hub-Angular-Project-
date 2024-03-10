import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Authentication Components/login/login.component';
import { SignupComponent } from './components/Authentication Components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { GameGenreCardsComponent } from './components/game-genre-cards/game-genre-cards.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'prefix'
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'index',
    component:IndexComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'prefix'
      },
      {
        path:'game-genre-cards',
        component:GameGenreCardsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
