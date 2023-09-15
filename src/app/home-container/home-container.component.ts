import { Component, Input, OnInit } from '@angular/core';
import { IMovieDetails } from './home-container.interface';
import { Router } from '@angular/router';
import { AddMovieService } from '../add-movie.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})

export class HomeContainerComponent implements OnInit{
  public displayMovie!: IMovieDetails;
  public popularMoviesList: Array<IMovieDetails> = [];
  public recentMoviesList: Array<IMovieDetails> = [];

  constructor(public readonly router: Router, private readonly movieContext: AddMovieService) {}

  public ngOnInit (): void {

    this.displayMovie = {
      id: 1,
      title: 'Stranger Things',
      matchpercent: '90.5%',
      year: 2001,
      season: 'Season 2',
      rating: 4.2,
      description: 'abc',
      imageurl: "https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw=="
    };

    this.popularMoviesList = [
        {
            id: 1,
            title: "Inception",
            matchpercent: "90%",
            year: 2010,
            season: "Summer",
            rating: 8.8,
            description: "A mind-bending heist thriller.",
            imageurl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
        },
        {
            id: 2,
            title: "The Shawshank Redemption",
            matchpercent: "95%",
            year: 1994,
            season: "Spring",
            rating: 9.3,
            description: "The story of hope and friendship in prison.",
            imageurl: "https://i.ytimg.com/vi/d-d0TmFjmt8/maxresdefault.jpg"
        },
        {
            id: 3,
            title: "Pulp Fiction",
            matchpercent: "88%",
            year: 1994,
            season: "Autumn",
            rating: 8.9,
            description: "A non-linear crime film by Quentin Tarantino.",
            imageurl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        },
        {
            id: 4,
            title: "The Dark Knight",
            matchpercent: "92%",
            year: 2008,
            season: "Summer",
            rating: 9.0,
            description: "The epic battle between Batman and the Joker.",
            imageurl: "https://m.media-amazon.com/images/S/pv-target-images/dbb1e872bf0d75f217734269348b239b8ece37c771e5c072de7a40b81eb103c6.jpg"
        },
        {
            id: 5,
            title: "Forrest Gump",
            matchpercent: "85%",
            year: 1994,
            season: "Spring",
            rating: 8.8,
            description: "Life is like a box of chocolates.",
            imageurl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
        },
        {
            id: 6,
            title: "The Matrix",
            matchpercent: "89%",
            year: 1999,
            season: "Winter",
            rating: 8.7,
            description: "A sci-fi classic about reality and illusion.",
            imageurl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        },
        {
            id: 7,
            title: "Gladiator",
            matchpercent: "87%",
            year: 2000,
            season: "Summer",
            rating: 8.5,
            description: "A tale of revenge and honor in ancient Rome.",
            imageurl: "https://m.media-amazon.com/images/I/81v8WQ-eF-L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 8,
            title: "Avatar",
            matchpercent: "91%",
            year: 2009,
            season: "Winter",
            rating: 7.8,
            description: "A journey to the alien world of Pandora.",
            imageurl: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg"
        },
        {
            id: 9,
            title: "The Godfather",
            matchpercent: "94%",
            year: 1972,
            season: "Autumn",
            rating: 9.2,
            description: "A mafia masterpiece by Francis Ford Coppola.",
            imageurl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
        },
        {
            id: 10,
            title: "Eternal Sunshine of the Spotless Mind",
            matchpercent: "88%",
            year: 2004,
            season: "Spring",
            rating: 8.3,
            description: "A unique love story with a touch of science fiction.",
            imageurl: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg"
        }
    ];    
    this.recentMoviesList = [
        {
            id: 11,
            title: "The Lord of the Rings: The Fellowship of the Ring",
            matchpercent: "93%",
            year: 2001,
            season: "Winter",
            rating: 8.8,
            description: "The epic journey to destroy the One Ring.",
            imageurl: "https://images.moviesanywhere.com/198e228b071c60f5ad57e5f62fe60029/ff22cad6-2218-414d-b853-3f95d76905c7.jpg"
        },
        {
            id: 12,
            title: "Schindler's List",
            matchpercent: "96%",
            year: 1993,
            season: "Autumn",
            rating: 8.9,
            description: "The true story of Oskar Schindler's efforts to save lives during the Holocaust.",
            imageurl: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        },
        {
            id: 13,
            title: "The Silence of the Lambs",
            matchpercent: "88%",
            year: 1991,
            season: "Spring",
            rating: 8.6,
            description: "A psychological thriller with Hannibal Lecter.",
            imageurl: "https://m.media-amazon.com/images/S/pv-target-images/1d661187b253755ef32e1f21748ca1e217529bb72f8ef8a87a18fd8e904246a0.jpg"
        },
        {
            id: 14,
            title: "Forrest Gump",
            matchpercent: "85%",
            year: 1994,
            season: "Spring",
            rating: 8.8,
            description: "Life is like a box of chocolates.",
            imageurl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
        },
        {
            id: 15,
            title: "The Avengers",
            matchpercent: "89%",
            year: 2012,
            season: "Summer",
            rating: 8.0,
            description: "Superheroes team up to save the world.",
            imageurl: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            id: 16,
            title: "The Social Network",
            matchpercent: "87%",
            year: 2010,
            season: "Autumn",
            rating: 7.7,
            description: "The story behind the creation of Facebook.",
            imageurl: "https://i.ytimg.com/vi/bynULuoHi98/maxresdefault.jpg"
        },
        {
            id: 17,
            title: "Jurassic Park",
            matchpercent: "84%",
            year: 1993,
            season: "Summer",
            rating: 8.1,
            description: "Dinosaurs come back to life.",
            imageurl: "https://static.wikia.nocookie.net/jurassicpark/images/7/7a/Jurassic_Park_-_Updated_logo.png/revision/latest/scale-to-width-down/1200?cb=20180628210247"
        },
        {
            id: 18,
            title: "The Revenant",
            matchpercent: "90%",
            year: 2015,
            season: "Winter",
            rating: 8.0,
            description: "A tale of survival and revenge in the wilderness.",
            imageurl: 'https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg'
        },
        {
            id: 19,
            title: "Interstellar",
            matchpercent: "91%",
            year: 2014,
            season: "Autumn",
            rating: 8.6,
            description: "A journey through space and time to save humanity.",
            imageurl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
        },
        {
            id: 20,
            title: "The Grand Budapest Hotel",
            matchpercent: "86%",
            year: 2014,
            season: "Spring",
            rating: 8.1,
            description: "A quirky and stylish comedy-adventure.",
            imageurl: 'https://kmit.in/emagazine/wp-content/uploads/2015/03/grand-budapest-hotel.png'
        }
    ];

    this.recentMoviesList = this.movieContext.getMovies()

}

  public gotoCreateMovie(): void{
    this.router.navigate(['addmovie']);
  }
  
}

