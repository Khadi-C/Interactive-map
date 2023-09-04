import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D280-PA-Task';
  countries: any[] = [];

  constructor(private http: HttpClient) {
    this.loadCountries();
  }

  loadCountries() {

    this.http.get<any>('https://api.worldbank.org/v2/country/au?format=json').subscribe(data => {
      const countryInfo = data[1][0];


      this.countries = [
        {
          name: countryInfo.name,
          capital: countryInfo.capitalCity,
          region: countryInfo.region.value,
          incomeLevel: countryInfo.incomeLevel.value,
          latitude: countryInfo.latitude.value,
          longitude: countryInfo.longitude.value
        }
      ];
    });
  }

  onCountryMouseEnter(country: any) {
    console.log(`Mouse entered country: ${country.name}`);
  }

  onCountryMouseLeave() {
    console.log('Mouse left country');
  }

  onCountryClick(country: any) {
    console.log(`Clicked on country: ${country.name}`);
  }
}
