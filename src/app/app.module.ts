import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeContainerModule } from './home-container/home-container.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
