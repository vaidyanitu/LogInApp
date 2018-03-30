import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  latitude:number=27.692134;
  longitude:number=85.319518;


   ngOnInit() {
      var mapProp = {
        center: new google.maps.LatLng(this.latitude,this.longitude ),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      var marker=new google.maps.Marker({
        position:{lat:this.latitude,lng:this.longitude},
        title:"Softvision",
        label:"Softvision"
      })
      marker.setMap(this.map);
    }

  }
