// You can write custom js here and it will be injected into the bundle in the end
;(function(){
    //if no map on this page, then do not execute
    var mapElement = document.getElementById('map');
    var section = mapElement.parentElement.parentElement;
    section.className += " fullwidth";
    if (!mapElement) {
        return;
    }

    var map;

    L.mapbox.accessToken = 'pk.eyJ1IjoibW9ydGVuIiwiYSI6ImYyOTMzMWJiODZhY2I2M2U2YTMyMjhmMmM2MGQ2NWJmIn0.BOlgrjDyfFXnAO8afZT5mA';
    map = L.mapbox.map('map', 'mapbox.streets').setView([-15.792607, -47.894246], 16);
    map.scrollWheelZoom.disable();

    L.mapbox.featureLayer({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [
                -47.894246, -15.792607
            ]
        },
        properties: {
            title: 'Complexo Brasil 21',
            description: 'SHS Quadra 06 – Complexo Brasil 21, Brasilia 70316-000, Brazil',
            'marker-size': 'large',
            'marker-color': '#009FB5'
        }
    }).addTo(map);

})();
