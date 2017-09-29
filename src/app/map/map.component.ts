import { Component } from '@angular/core';
import { DataService } from '.././services/data.service';
import { ILocation } from '.././interfaces/location.interface';
import { MapsAPILoader } from '@agm/core';
declare var google: any;

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {
  lat: number = 51.673858;
  lng: number = 7.4125;
  bounds: any;

  infoWindowOpened = null;

  markers: ILocation[] = [];

  constructor(private mapsAPILoader: MapsAPILoader,
    private dataService: DataService) {

    dataService.getLocations().subscribe(res => {
      var resp = res.json();
      this.markers = resp.locations;

      this.mapsAPILoader.load().then(() => {
        this.bounds = new window['google'].maps.LatLngBounds();
        this.markers.forEach((location) => {
          this.bounds.extend(new window['google'].maps.LatLng(location.lat, location.lng))
        })
      });
    });
  }

  clickedMarker(label: string, infoWindow, index: number) {
    if (this.infoWindowOpened === infoWindow)
      return;

    if (this.infoWindowOpened !== null)
      this.infoWindowOpened.close();

    this.infoWindowOpened = infoWindow;
  }
}