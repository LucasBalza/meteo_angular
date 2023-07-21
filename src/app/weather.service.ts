import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://www.prevision-meteo.ch/services/json/toulouse/';

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
