import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LocationMapping';
  profiles = [
    { name: 'Mumbai', latitude: 19.0760, longitude: 72.8777 },
    { name: 'Bangalore', latitude: 12.9716, longitude: 77.5946 },
    { name: 'New York', latitude: 40.7128, longitude: -74.0060 },
    { name: 'Mumbai', latitude: 19.0760, longitude: 72.8777 },
    { name: 'Bangalore', latitude: 12.9716, longitude: 77.5946 },
    // Add more profiles with lat/long values
    
  ];
  selectedProfile: any; // Store the selected profile

  handleProfileSelection(profile: any) {
    this.selectedProfile = profile;
  }
}
