import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  @Input() profiles: any[] = [];
  @Input() selectedProfile: any;
  @Output() profileSelected = new EventEmitter<any>();

  focusOnProfile(profile: any) {
    this.profileSelected.emit(profile);
  }
}
