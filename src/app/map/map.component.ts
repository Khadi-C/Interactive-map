import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  constructor(private apiService: ApiService) { }

  ngOnIt(): void {
    this.fetchCountryInfo();
  }

  fetchCountryInfo() {
    const countryCode = 'au';
    this.apiService.getCountryInfo(countryCode).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Error fetching country info:', error);
      }
    );
  }

}
