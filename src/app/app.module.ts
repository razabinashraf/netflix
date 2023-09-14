import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeContainerModule } from './home-container/home-container.module';
import { BrowserModule } from '@angular/platform-browser';
import { AddMovieComponent } from './home-container/add-movie/add-movie.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { UserauthService } from './userauth.service';
import { LocalstorageService } from './localstorage.service';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeContainerModule,
    FormsModule
  ],
  providers: [
    LocalstorageService,
    UserauthService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
