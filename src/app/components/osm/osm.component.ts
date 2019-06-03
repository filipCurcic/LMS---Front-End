import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Map, View, Feature} from 'ol';
import TileLayer from 'ol/layer/Tile';
import * as OlLayer from 'ol/layer';
import OSM from 'ol/source/OSM';
import Vector from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import * as proj from 'ol/proj';
import Overlay from 'ol/Overlay.js';


@Component({
  selector: 'app-osm',
  templateUrl: './osm.component.html',
  styleUrls: ['./osm.component.css']
})
export class OsmComponent implements OnInit {

  @ViewChild('map')
  private mapElement: ElementRef;

  @ViewChild("mappopup")
  private popupElement: ElementRef;

  private map;

  constructor() { }

  ngOnInit() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: proj.transform([19.844379, 45.253076], "EPSG:4326", "EPSG:3857"),
        zoom: 18,
        maxZoom: 19
      })
    })

    let locations = [];

    let iconStyle = new Style({
      image: new Icon(({
        anchor: [0.5, 0.5],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        src: 'assets/img/logo.jpg',
        scale: 0.1
      }))
    })

    

    let popup = new Overlay({
      id: "popupOverlay",
      element: this.popupElement.nativeElement,
      stopEvent: false,
      offset: [-100, 0]
    })

    this.map.addOverlay(popup);

    let noviSad = new Feature({
      geometry: new Point(proj.transform([19.844376, 45.253076], "EPSG:4326", "EPSG:3857")),
      name: "Univerzitet Singidunum",
      schools:"<ul><li>Techincal Sciences</li><li>Economics</li><li>Information and computing</li></ul>"
    })

    locations.push(noviSad);

    let vectorSource = new Vector({
      features: locations
    });

    this.map.addLayer(new OlLayer.Vector({
      source: vectorSource,
      style: iconStyle
    }));

    this.map.on("click", (event) => {console.log("map"); this.handleFeatureClick(Event) });

  }

  ngAfterViewInit(){
    this.map.setTarget(this.mapElement.nativeElement);
  }

  handleFeatureClick(event){
    let overlay = this.map.getOverlayById("popupOverlay");
    let feature = this.map.forEachFeatureAtPixel(event.pixel, (feature) => {
      return feature;
    })

    if(feature){
      overlay.setPosition(feature.getGeometry().getCoordinates());
      let title = overlay.getElement().querySelectorAll("h3")[0];
      let content = overlay.getElement().querySelectorAll("div")[0];

      title.innerHTML = feature.get("name");
      content.innerHTML = feature.get("schools");

      overlay.getElement().style.display = "block";
      overlay.setOffset([-overlay.getElement().offsetWidth/2, -(overlay.getElement().offsetHeight/2)])
    }else{
      overlay.getElement().style.display = "none";
    }
  }

  


}
