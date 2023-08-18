import { style } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/app/environments/environment';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v12';
  lat = 20.5937;
  lng = 78.9629;
  zoom = 5;

  constructor() { 
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }
  @Input() profiles: any[]= [];
  ngOnInit(): void {
    this.buildMap();
    this.addMarkers();
  }
  buildMap() {
    const navControl = new mapboxgl.NavigationControl();
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
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
  
}


