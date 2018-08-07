
const mapbox = require('mapbox-gl')

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};



let buildMarker = function (type, coordinates){

  const markerDOMEl = document.createElement('div');
  markerDOMEl.style.width = "32px";
  markerDOMEl.style.height = "32px";
  markerDOMEl.style.backgroundImage = "url(" + iconURLs[type] + ")";

  const newMarker = new mapboxgl.Marker(markerDOMEl).setLngLat(coordinates);
  return newMarker;
}

module.exports = buildMarker;
