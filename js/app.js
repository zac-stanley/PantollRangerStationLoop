(function () {

  	// map options
		var options = {
      center: [37.9083, -122.6046],
      zoomSnap: .1,
      zoomControl: false
      
    }

    // create a Leaflet map in our division container with id of 'map'
    var map = L.map('map');

    // Leaflet providers base map URL
    var basemap_source =
      'https://api.mapbox.com/styles/v1/zacstanley/ckd6fjnep1j4c1imp1zahag1d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemFjc3RhbmxleSIsImEiOiJCS20zaVR3In0._oaGhAVLz04gbE3M2HKHGA'

    // Leaflet providers attributes
    var basemap_options = {
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
      subdomains: 'abcd',
      maxZoom: 19
    };

    // request some basemap tiles and add to the map
    var tiles = L.tileLayer(basemap_source, basemap_options).addTo(map);

    var commonStyles = {
      weight: 1,
      stroke: 1,
      fillOpacity: .8
    }

    // add pantoll trailhead
    // let pantollTrailHead = L.geoJson(trailHeads, {
    //   pointToLayer: function (feature, latlngs){
    //     return L.circleMarker (feature, commonStyles);
    //   },

    //   }).addTo(map);

   
    // add pantoll loop to map
    let pantoll = L.geoJson(hikes, {
      pointToLayer: function(feature, latlngs){
        return L.polyline (feature, latlngs);
      },
      // filter layer to only show pantoll loop
      filter: function (feature) {
        if (feature.properties.trailName == "PantollRangerStationLoop"){
          return feature;
        }
      },

       // style trail line feature
       style: function(feature) {
        return{
        color: '#000000',
        weight: 2,
        dashArray: '4, 4'
        

      }

    }
    }).addTo(map)
    map.fitBounds(pantoll.getBounds())

})();