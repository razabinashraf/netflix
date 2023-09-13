import { Component, Input } from '@angular/core';
import { IMovieDetails } from '../home-container.interface';

@Component({
  selector: 'app-recent-container',
  templateUrl: './recent-container.component.html',
  styleUrls: ['./recent-container.component.scss']
})
export class RecentContainerComponent {
  
  @Input() public recentMoviesList: Array<IMovieDetails> = [];
}
