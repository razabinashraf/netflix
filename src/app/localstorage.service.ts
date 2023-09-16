import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }

  public setStorage(key: string, value: any): void {
    localStorage.setItem(key,JSON.stringify(value));
  }

  public getStorage(key: any): any  {
    const data = localStorage.getItem(key);
    return JSON.parse(data!);
  }
}
