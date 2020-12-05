var map = L.map('main_map').setView([-31.7325966,-60.5298745], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);


$.ajax({
    dataType: 'json',
    url: 'api/bicicletas',
    success: (result)=> {
        console.log(result)
        result.bicicletas.forEach((bici)=>{
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map) 
        })
    }
})