import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserauthService } from './userauth.service';

@Injectable()

export class AuthGuardService implements CanActivate{

  constructor(
    private readonly userAuth: UserauthService,
    private readonly router: Router
  ) { }

  canActivate(): boolean {
    if(this.userAuth.isAuthenticate())
    {
      return true;
    }
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }

  }

