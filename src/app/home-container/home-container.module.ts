import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { HomeContainerComponent } from './home-container.component';



@NgModule({
  declarations: [
    MovieContainerComponent,
    HomeContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeContainerComponent]
})
export class HomeContainerModule { }
