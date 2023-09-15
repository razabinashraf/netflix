import { Component } from '@angular/core';
import { IUserDetails } from '../app.interface';
import { Router } from '@angular/router';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public form!: Partial<IUserDetails>;
  public error: boolean = false;

  constructor(
    public readonly router: Router,
    private readonly userAuthService: UserauthService
  ) {}

  public ngOnInit(): void {
    this.form = {
      email: '',
      password: '',
    }
  }

  public onSubmit(): void {
    const isUserValid = this.userAuthService.validateUser(this.form);
    isUserValid? void this.router.navigate(['home']) : this.error = true;
  }

  public onSignup(): void {
    void this.router.navigate(['signup'])
  }
}
