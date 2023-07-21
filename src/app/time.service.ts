import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  getCurrentDateTime(): any {
    const currentDate = new Date();
    return currentDate;
  }
}
