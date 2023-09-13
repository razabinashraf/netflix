import { Component, Input, OnInit } from '@angular/core';
import { IMovieDetails } from './home-container.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  public displayMovie!: IMovieDetails;
 
  public ngOnInit(): void {
    this.displayMovie = {
      id: 1,
      title: 'Stranger Things',
      matchpercent: '90.5%',
      year: 2001,
      season: 'Season 2',
      rating: 4.2,
      description: 'abc'
    }
  }

}
