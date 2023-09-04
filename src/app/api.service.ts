import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCountryInfo(name: string) {
    return this.http.get<any[]>(`https://api.worldbank.org/v2/country?format=json`).pipe(
      map(response => {
        const countries = response[1];
        const country = countries.find((c: { name: string; }) => c.name === name);
        if (country) {
          return {
            name: country.name,
            capital: country.capitalCity,
            region: country.region.value,
            incomeLevel: country.incomeLevel.value,
            latitude: country.latitude,
            longitude: country.longitude
          };
        } else {
          return null;
        }
      })
    );
  }
}
