import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularContainerComponent } from './popular-container/popular-container.component';
import { RecentContainerComponent } from './recent-container/recent-container.component';
import { HomeContainerComponent } from './home-container.component';



@NgModule({
  declarations: [
    PopularContainerComponent,
    RecentContainerComponent,
    HomeContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeContainerComponent
  ]
})
export class HomeContainerModule { }
