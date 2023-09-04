import { Component, AfterViewInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  countryInfo: { name: any; capital: any; region: any; incomeLevel: any; latitude: any; longitude: any; } | null = null;
  countries: any[] = [];

  constructor(private apiService: ApiService) { }

  ngAfterViewInit() {
    this.addEventListeners();
  }

  addEventListeners() {
    const paths = document.querySelectorAll<SVGElement>('path');

    paths.forEach(path => {
      path.addEventListener('mouseover', (event) => {
        const countryName = path.getAttribute('name');
        if (countryName) {
          this.getCountryDetails(countryName);
        }
        event.stopPropagation();
      });

      path.addEventListener('mouseout', () => {

      });
    });
  }

  getCountryDetails(name: string) {
    this.apiService.getCountryInfo(name).subscribe(info => {
      this.countryInfo = info;
    });
  }

  onCountryMouseEnter(event: MouseEvent, country: any) {
    const hoveredElement = event.target as HTMLElement;
    if (hoveredElement.tagName === 'path') {
      hoveredElement.style.fill = 'pink';
      this.getCountryDetails(country.name);
    }
  }

  onCountryMouseLeave() {
    const hoveredPaths = document.querySelectorAll<SVGElement>('path:hover');
    hoveredPaths.forEach(path => {
      path.style.fill = '';
    });
    this.countryInfo = null;
  }

  onCountryClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.tagName === 'path') {
      const countryName = clickedElement.getAttribute('name');
      if (countryName) {
        this.getCountryDetails(countryName);
      }
    }
  }
}
