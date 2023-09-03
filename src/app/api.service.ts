import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api.worldbank.org/v2';

  constructor(private http: HttpClient) { }

  getCountryInfo(countryCode: string): Observable<any> {
    const url = `${this.baseUrl}/country/${countryCode}?formate=json`;
    return this.http.get(url);
  }
}
