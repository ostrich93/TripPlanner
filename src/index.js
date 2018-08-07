mapboxgl = require('mapbox-gl');
buildMarker  = require('./marker');

mapboxgl.accessToken = "pk.eyJ1IjoiZGFubnkwNTE1OCIsImEiOiJjamtrNDk4MGwwOGM0M3dtaDBrajcyYnJ2In0.waqpZT8_Kt9GlsVWDnNSSw";

const markerDOMEl = document.createElement('div');
markerDOMEl.style.width = "32px";
markerDOMEl.style.height = "32px";
markerDOMEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
  });

const sampleMarker = buildMarker('hotels', [-87.641, 41.895]);
sampleMarker.addTo(map);

  //new mapboxgl.Marker(markerDOMEl).setLngLat([-87.641, 41.895]).addTo(map);