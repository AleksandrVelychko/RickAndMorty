import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  public start(): boolean {
    document.body.classList.add('loading');
    return true;
  }

  public stop(): boolean {
    document.body.classList.remove('loading');
    return false;
  }
}
