import { Component, Input } from '@angular/core';
import { IMovieDetails } from '../home-container.interface';

@Component({
  selector: 'app-popular-container',
  templateUrl: './popular-container.component.html',
  styleUrls: ['./popular-container.component.scss']
})
export class PopularContainerComponent {

  @Input() public popularMoviesList: Array<IMovieDetails> = [];
}
