import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  countryInfo!: { name: any; capital: any; region: any; incomeLevel: any; latitude: any; longitude: any; };

  constructor(private apiService: ApiService) { }

  onCountryClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.tagName === 'path') {
      const countryName = clickedElement.getAttribute('data-name');
      if (countryName) {
        this.getCountryDetails(countryName);
      }
    }
  }

  getCountryDetails(name: string) {
    this.apiService.getCountryInfo(name).subscribe(info => {
      this.countryInfo = info;
    });
  }
}
