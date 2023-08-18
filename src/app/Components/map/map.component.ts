import { style } from '@angular/animations';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/app/environments/environment';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {
  map!: mapboxgl.Map;

  constructor() { 
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }
  @Input() profiles: any[] = [];
  @Input() selectedProfile: any;
  ngOnInit(): void {
    this.buildMap();
    this.addMarkers();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedProfile'] && !changes['selectedProfile'].firstChange) {
      this.focusMapOnProfile(changes['selectedProfile'].currentValue);
    }
  }
  buildMap() {
    const navControl = new mapboxgl.NavigationControl();
    this.map = new mapboxgl.Map({
      container : 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [78.9629, 20.5937],
      zoom : 5,
      attributionControl: false
    })
    this.map.addControl(navControl, 'top-right');
 
  }
  addMarkers() {
    this.profiles.forEach(profile => {
      new mapboxgl.Marker()
        .setLngLat([profile.longitude, profile.latitude])
        .addTo(this.map);
    });
  }
  focusMapOnProfile(selectedProfile: any) {
    if (selectedProfile) {
      this.map.flyTo({
        center: [selectedProfile.longitude, selectedProfile.latitude],
        zoom: 10
      });
    }
  }
  
}


