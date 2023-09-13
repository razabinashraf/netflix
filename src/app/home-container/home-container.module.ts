import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { PopularContainerComponent } from './popular-container/popular-container.component';
import { RecentContainerComponent } from './recent-container/recent-container.component';
import { HomeContainerComponent } from './home-container.component';



@NgModule({
  declarations: [
    MovieContainerComponent,
    PopularContainerComponent,
    RecentContainerComponent,
    HomeContainerComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    HomeContainerComponent
  ]
})
export class HomeContainerModule { }
