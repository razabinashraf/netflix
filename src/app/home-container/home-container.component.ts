import { Component, OnInit } from '@angular/core';
import { IMovieDetails } from './home-container.interface';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit{
  public popularMoviesList: Array<IMovieDetails> = [];
  public recentMoviesList: Array<IMovieDetails> = [];

  constructor() {

  }

  public ngOnInit (): void {
    this.popularMoviesList = [
      {
          id: 1,
          title: "Inception",
          matchpercent: "90%",
          year: 2010,
          season: "Summer",
          rating: 8.8,
          description: "A mind-bending heist thriller."
      },
      {
          id: 2,
          title: "The Shawshank Redemption",
          matchpercent: "95%",
          year: 1994,
          season: "Spring",
          rating: 9.3,
          description: "The story of hope and friendship in prison."
      },
      {
          id: 3,
          title: "Pulp Fiction",
          matchpercent: "88%",
          year: 1994,
          season: "Autumn",
          rating: 8.9,
          description: "A non-linear crime film by Quentin Tarantino."
      },
      {
          id: 4,
          title: "The Dark Knight",
          matchpercent: "92%",
          year: 2008,
          season: "Summer",
          rating: 9.0,
          description: "The epic battle between Batman and the Joker."
      },
      {
          id: 5,
          title: "Forrest Gump",
          matchpercent: "85%",
          year: 1994,
          season: "Spring",
          rating: 8.8,
          description: "Life is like a box of chocolates."
      },
      {
          id: 6,
          title: "The Matrix",
          matchpercent: "89%",
          year: 1999,
          season: "Winter",
          rating: 8.7,
          description: "A sci-fi classic about reality and illusion."
      },
      {
          id: 7,
          title: "Gladiator",
          matchpercent: "87%",
          year: 2000,
          season: "Summer",
          rating: 8.5,
          description: "A tale of revenge and honor in ancient Rome."
      },
      {
          id: 8,
          title: "Avatar",
          matchpercent: "91%",
          year: 2009,
          season: "Winter",
          rating: 7.8,
          description: "A journey to the alien world of Pandora."
      },
      {
          id: 9,
          title: "The Godfather",
          matchpercent: "94%",
          year: 1972,
          season: "Autumn",
          rating: 9.2,
          description: "A mafia masterpiece by Francis Ford Coppola."
      },
      {
          id: 10,
          title: "Eternal Sunshine of the Spotless Mind",
          matchpercent: "88%",
          year: 2004,
          season: "Spring",
          rating: 8.3,
          description: "A unique love story with a touch of science fiction."
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
        description: "The epic journey to destroy the One Ring."
    },
    {
        id: 12,
        title: "Schindler's List",
        matchpercent: "96%",
        year: 1993,
        season: "Autumn",
        rating: 8.9,
        description: "The true story of Oskar Schindler's efforts to save lives during the Holocaust."
    },
    {
        id: 13,
        title: "The Silence of the Lambs",
        matchpercent: "88%",
        year: 1991,
        season: "Spring",
        rating: 8.6,
        description: "A psychological thriller with Hannibal Lecter."
    },
    {
        id: 14,
        title: "Forrest Gump",
        matchpercent: "85%",
        year: 1994,
        season: "Spring",
        rating: 8.8,
        description: "Life is like a box of chocolates."
    },
    {
        id: 15,
        title: "The Avengers",
        matchpercent: "89%",
        year: 2012,
        season: "Summer",
        rating: 8.0,
        description: "Superheroes team up to save the world."
    },
    {
        id: 16,
        title: "The Social Network",
        matchpercent: "87%",
        year: 2010,
        season: "Autumn",
        rating: 7.7,
        description: "The story behind the creation of Facebook."
    },
    {
        id: 17,
        title: "Jurassic Park",
        matchpercent: "84%",
        year: 1993,
        season: "Summer",
        rating: 8.1,
        description: "Dinosaurs come back to life."
    },
    {
        id: 18,
        title: "The Revenant",
        matchpercent: "90%",
        year: 2015,
        season: "Winter",
        rating: 8.0,
        description: "A tale of survival and revenge in the wilderness."
    },
    {
        id: 19,
        title: "Interstellar",
        matchpercent: "91%",
        year: 2014,
        season: "Autumn",
        rating: 8.6,
        description: "A journey through space and time to save humanity."
    },
    {
        id: 20,
        title: "The Grand Budapest Hotel",
        matchpercent: "86%",
        year: 2014,
        season: "Spring",
        rating: 8.1,
        description: "A quirky and stylish comedy-adventure."
    }
];


  }
}
