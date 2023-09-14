import { Component, OnInit } from '@angular/core';
import { IUserDetails } from '../app.interface';
import { Router } from '@angular/router';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  
  public form!: IUserDetails;
  public error = false;

  constructor(
   public readonly router: Router,
   private readonly userAuthService: UserauthService
  ) {}


  ngOnInit(): void {
    this.form = {
      name: '', 
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  public onSubmit(): void {
    if(this.form.password === this.form.confirmPassword) {
      this.error = false;
      this.userAuthService.setUserDetails(this.form);

      void this.router.navigate(['login']);
    }
    else {
      this.error = true;
    }
  }

  public onReset(): void {
    this.form = {
      name: '', 
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

}
