import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { HomeContainerComponent } from './home-container.component';

const routes:Routes = [
  {
    path: 'home',
    component: HomeContainerComponent
  },
  {
    path: 'addmovie',
    component: AddMovieComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeContainerRoutingModule { }
