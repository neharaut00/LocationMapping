import { Component } from '@angular/core';
import { profiles } from './Profiles';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LocationMapping';
  profiles = profiles;
  selectedProfile: any; // Store the selected profile

  handleProfileSelection(profile: any) {
    this.selectedProfile = profile;
  }
}
