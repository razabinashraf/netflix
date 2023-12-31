import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { PopularContainerComponent } from './popular-container/popular-container.component';
import { RecentContainerComponent } from './recent-container/recent-container.component';
import { HomeContainerComponent } from './home-container.component';
import { FormsModule } from '@angular/forms';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddMovieService } from '../add-movie.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { HomeContainerRoutingModule } from './home-container-routing.module';


@NgModule({
  declarations: [
    MovieContainerComponent,
    PopularContainerComponent,
    RecentContainerComponent,
    HomeContainerComponent,
    AddMovieComponent,
    TopBarComponent,
    EditMovieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeContainerRoutingModule,
  ],

  exports:[
    HomeContainerComponent,
    AddMovieComponent,
  ],
  providers: [
    AddMovieService,
    ],
})
export class HomeContainerModule { }
