import React from "react";
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Basemap from './BaseMaps';
import CoordInsert from './coordinsert';
import '../../css/maps/map.css';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
  state = {
    lat: 50.4546600,
    lng: 30.5238000,
    zoom: 10,
    basemap: 'osm',

    geojsonvisible: false,
    visibleModal: false,
  };

  onCoordInsertChange = (lat, long, z) => {
    this.setState({
      lat: lat,
      lng: long,
      zoom: z,
    });
  }

  onBMChange = (bm) => {
    this.setState({
      basemap: bm
    });
  }

  onGeojsonToggle = (e) => {
    
    this.setState({
      geojsonvisible: e.currentTarget.checked
    });
  }

  render() {
    var center = [this.state.lat, this.state.lng];
    var z = this.state.zoom;

    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
    }

    return (
      <Map zoom={z} center={center}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={basemapsDict[this.state.basemap]}
        />
        <Basemap basemap={this.state.basemap} onChange={this.onBMChange} />

        <CoordInsert onllzChange={this.onCoordInsertChange} />

        <Marker position={center}>
          <Popup>
            Широта: {this.state.lat}<br/>
            Долгота: {this.state.lng}<br/>
            Масштаб: {this.state.zoom}
          </Popup>
        </Marker>
      </Map>
    );
  }
};

export default MapComponent;