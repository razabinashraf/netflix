import { Component } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: any = [];
  constructor(private apiService: ApiCallService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
}
