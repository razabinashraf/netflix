import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { AddMovieComponent } from './home-container/add-movie/add-movie.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'signup', 
    component: SignupPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: HomeContainerComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'addmovie',
    component: AddMovieComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
