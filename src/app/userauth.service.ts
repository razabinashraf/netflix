import { Injectable } from '@angular/core';
import { IUserDetails } from './app.interface';
import { LocalstorageService } from './localstorage.service';

const USER_KEY = 'userData';
@Injectable()

export class UserauthService {

  private userDetails!: IUserDetails;

  constructor(
    public readonly storeToLocal: LocalstorageService
  ) { }

  public getUserDetails(): IUserDetails {
    const userData = this.storeToLocal.getStorage(USER_KEY);
    return this.userDetails;
  }

  public setUserDetails(userData: IUserDetails): void {
    this.storeToLocal.setStorage(USER_KEY,userData);
    this.userDetails = userData;
  }

  public validateUser(passedUserData: Partial<IUserDetails>): boolean {
    this.getUserDetails();
    return this.userDetails?.email === passedUserData.email && 
           this.userDetails?.confirmPassword === passedUserData.password;

  }
}
