var map = L.map('main_map').setView([-31.7325966,-60.5298745], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

var marker = [L.marker([-31.7325966,-60.5298745]).addTo(map),
            L.marker([-31.7326286,-60.5294775]).addTo(map), 
            L.marker([-31.735731,-60.5320523]).addTo(map)]
