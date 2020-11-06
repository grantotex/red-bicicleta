var map = L.map('main_map').setView([-25.507786, -57.364506], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-25.507786, -57.364506]).addTo(map);
L.marker([-25.510417, -57.363395]).addTo(map);
L.marker([-25.508287, -57.365476]).addTo(map);

$.ajax ({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });

        
    }
})