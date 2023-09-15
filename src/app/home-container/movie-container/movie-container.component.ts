import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovieDetails } from '../home-container.interface';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent {
   @Input() public displayMovie?: IMovieDetails;
  }

