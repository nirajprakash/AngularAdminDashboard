import { Component } from '@angular/core';
import { LatLngLiteral, AgmPolygon } from '@agm/core';

@Component({
  selector: 'map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.scss']
})
export class MapLocationComponent {

  lat: number = 51.678418;
  lng: number = 7.809007;

  _vmPolygon: Array<LatLngLiteral> = [
    { lng: 77.62656, lat: 12.93811 },
    { lng: 77.62961, lat: 12.93877 },
    { lng: 77.63701, lat: 12.93285 },
    { lng: 77.63045, lat: 12.92912 },
    { lng: 77.6231, lat: 12.93177 },
    { lng: 77.62656, lat: 12.93811 }];

  _vmPolyLines: Array<LatLngLiteral> = [
    {lng:77.62665, lat:12.93652}, 
    {lng:77.62721, lat:12.93627}, 
    {lng:77.62776, lat:12.93677}, 
    {lng:77.62849, lat:12.93639}, 
    {lng:77.62879, lat:12.93569}, 
    {lng:77.62892, lat:12.93501}, 
    {lng:77.62888, lat:12.93401}, 
    {lng:77.62854, lat:12.93334}, 
    {lng:77.62841, lat:12.93229},
    {lng:77.62841, lat:12.93129}, 
    {lng:77.62877, lat:12.93062}, 
    {lng:77.62901, lat:12.92997}, 
    {lng:77.62944, lat:12.92949}, 
    {lng:77.63038, lat:12.9289}, 
    {lng:77.63051, lat:12.92773}, 
    {lng:77.63133, lat:12.92731}, 
    {lng:77.63223, lat:12.92731}, 
    {lng:77.63278, lat:12.92761}, 
    {lng:77.63347, lat:12.9271}, 
    {lng:77.63356, lat:12.9256}
  ]
  _vmMapStyle: any = [
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e9e9e9"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dedede"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": 36
        },
        {
          "color": "#333333"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f2f2f2"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#fefefe"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#fefefe"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    }
  ];


}