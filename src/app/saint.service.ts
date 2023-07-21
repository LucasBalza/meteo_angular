import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaintService {
  private apiUrl = 'https://nominis.cef.fr/json/nominis.php';

  constructor(private http: HttpClient) { }

  getFirstMajorSaint(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
