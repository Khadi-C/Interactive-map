import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string = "https://api.worldbank.org/v2/country";

  constructor(private httpClient: HttpClient) { }

  getCountryInfo(countryCode: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${countryCode}?format=json`);
  }
}