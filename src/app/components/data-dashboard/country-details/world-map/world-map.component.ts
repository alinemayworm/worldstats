import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
} from "@angular/core";
import {} from "googlemaps";

@Component({
  selector: "app-world-map",
  templateUrl: "./world-map.component.html",
  styleUrls: ["./world-map.component.css"],
})
export class WorldMapComponent implements AfterViewInit {
  @Input()
  lat: number;

  @Input()
  long: number;

  constructor() {
    // Initialize properties here if needed.
    this.lat = 0;
    this.long = 0;
  }

  @ViewChild("map", { static: true })
  mapElement!: ElementRef;
  map!: google.maps.Map;
  marker!: google.maps.Marker;

  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(0, 0),
      zoom: 1,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );

    const markerPosition = new google.maps.LatLng(this.lat, this.long);
    this.marker = new google.maps.Marker({
      position: markerPosition,
      map: this.map,
      title: "Your Marker Title",
    });
  }
}
