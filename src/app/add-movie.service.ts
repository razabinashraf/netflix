import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { IMovieDetails } from './home-container/home-container.interface';

@Injectable()
export class AddMovieService {

  constructor(
    private readonly dbContext: LocalstorageService
  ) { }

  movieList!: Array<IMovieDetails>;

  public AddMovie(book: IMovieDetails){
    this.movieList = this.dbContext.getStorage('movies') || [];
    this.movieList.push(book);
    this.dbContext.setStorage('movies', this.movieList);
  }

  public getMovies() : Array<IMovieDetails>{
    this.movieList = this.dbContext.getStorage('movies') || [];
    return this.movieList
  }
}
