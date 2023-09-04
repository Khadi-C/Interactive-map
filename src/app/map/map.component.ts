import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  country: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { }

  onCountrySelected(countryCode: string): void {
    this.apiService.getCountryInfo(countryCode).subscribe(data => {
      this.country = {
        name: data[1][0].name,
        capital: data[1][0].capitalCity,
        region: data[1][0].region.value,
        incomeLevel: data[1][0].incomeLevel.value,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude
      };
    });
  }
  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}