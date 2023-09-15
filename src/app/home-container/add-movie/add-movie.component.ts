import { Component } from '@angular/core';
import { IMovieDetails } from '../home-container.interface';
import { Router } from '@angular/router';
import { AddMovieService } from 'src/app/add-movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {

  public movie!: IMovieDetails;
  public isCreated: boolean = false;

  constructor(private readonly router: Router, private readonly movieContext: AddMovieService){}

  public ngOnInit(): void {
    this.movie = {
      id: 0,
      title: "",
      matchpercent: "",
      year: 2000,
      season: "",
      rating: 4, 
      description: "",
      imageurl: "",
    }
  }

  public CreateMovie(){
    this.isCreated = true;
    this.movieContext.AddMovie(this.movie);
  }

  public gotoMovies(){
    this.router.navigate(['']);
  }
}

