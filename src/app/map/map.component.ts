import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() countries: any[] = [];
  selectedCountryInfo: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchCountryInfo();
  }

  fetchCountryInfo() {
    const countryCode = 'au';
    this.apiService.getCountryInfo(countryCode).subscribe({
      next: (data) => {
        this.selectedCountryInfo = data;
      },
      error: (error) => {
        console.error('Error fetching country info:', error);
      }
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
