import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken = "pk.eyJ1IjoibmVoYXJhdXQwMCIsImEiOiJjbGxnemkyMmIxNm0wM29xeWhhOWwzYm54In0.ykqRKC1dQEq-FwKmoAuctQ";
    
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [78.9629, 20.5937],
      zoom: 5
    });
    
    
  }
}
