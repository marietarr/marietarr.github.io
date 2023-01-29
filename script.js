let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("excel");
        habilidades[1].classList.add("powerpoint");
        habilidades[2].classList.add("word");
        habilidades[3].classList.add("arcgis");
        habilidades[4].classList.add("photoshop");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//WEBSIG//
// Create variable to hold map element, give initial settings to map 
var map = L.map('map',{ 
    center: [41.18207, -8.68908], 
    zoom: 13
});

// Base maps
var basetopo = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {});
	
var baserelief = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
});
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
 attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
subdomains: 'abcd',
minZoom: 1,
maxZoom: 16,
ext: 'jpg'
});

    
	basetopo.addTo(map);
	baserelief.addTo(map);
    googleSat.addTo(map);
    Stamen_Watercolor.addTo(map);


//Painel de controlo das mapas
var baselayers = {
    'Mapa 1': basetopo,
    'Mapa 2': baserelief,
    'Mapa 3': googleSat,
    "Mapa 4": Stamen_Watercolor,
};


//VARIÁVEIS

var elevacion = L.geoJson(perfil, {
    pointToLayer: function(feature,latlng){
    return L.market(latlng);},
    onEachFeature: function(feature, layer){
    layer.bindPopup("<strong>Calle: </strong>"+feature.properties.nombre)
    },
    style:{
        fillColor:'red',
        filOpacity:5,
        color:'red',
        weight:15,
    }
});
    elevacion.addTo(map);


var cheia = L.geoJson(cheias, {
    pointToLayer: function(feature,latlng){
    return L.market(latlng);},
    onEachFeature: function(feature, layer){
    layer.bindPopup("<strong>Zona: </strong>"+feature.properties.OBSERVACOE)
    },
    style:{
        fillColor:'green',
        filOpacity:5,
        color:'green'
    }
});
    cheia.addTo(map);




var freguesias = L.geoJson(freg, {
    pointToLayer: function(feature,latlng){
    return L.marker(latlng);},
    onEachFeature: function(feature, layer){
    layer.bindPopup("<strong>Freguesia: </strong>"+feature.properties.Freguesia)
    },
    style:{


        fillColor:'gray',
        filOpacity:1,
        color:'black',
        weight:3,
        
        
    }
});
    freguesias.addTo(map);


    


var blackIcon = new L.Icon({
    iconUrl: 'leaflet-color-markers-master/img/marker-icon-2x-black.png',
    shadowUrl: 'leaflet-color-markers-master/img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });
var singleMarker = L.marker([41.183425, -8.682841], {icon: blackIcon} );
singleMarker.addTo(map);

var popup = singleMarker.bindPopup("<strong>Camara Municipal de Matosinhos</strong><br>El Ayuntamiento de Matosinhos (CMM) es un órgano de administración local del municipio. Su misión es definir e implementar políticas que promuevan el desarrollo del Consejo en diferentes áreas.<br><img width=150, height=150 src='./img/cm2.jpg'/>")
popup.addTo(map);

var PinkIcon = new L.Icon({
    iconUrl: 'leaflet-color-markers-master/img/marker-icon-violet.png',
    shadowUrl: 'leaflet-color-markers-master/img/marker-shadow.png',
    iconSize: [15, 30],
    iconAnchor: [6, 22],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });
var singleMarker = L.marker([41.179977, -8.657958], {icon: PinkIcon} );
singleMarker.addTo(map);

var popup = singleMarker.bindPopup("<strong>Autoestrada do Litoral Norte</strong><br><img width=300, height=100 src='./img/auto.jpg'/>")
popup.addTo(map);

var GreenIcon = new L.Icon({
    iconUrl: 'leaflet-color-markers-master/img/marker-icon-green.png',
    shadowUrl: 'leaflet-color-markers-master/img/marker-shadow.png',
    iconSize: [15, 30],
    iconAnchor: [6, 22],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });
var singleMarker = L.marker([41.191065, -8.629383], {icon: GreenIcon} );
singleMarker.addTo(map);

var popup = singleMarker.bindPopup("<strong>Av. Xanana Gusmão</strong><br><img width=300, height=100 src='./img/xanana.jpg'/>")
popup.addTo(map);

var RedIcon = new L.Icon({
    iconUrl: 'leaflet-color-markers-master/img/marker-icon-red.png',
    shadowUrl: 'leaflet-color-markers-master/img/marker-shadow.png',
    iconSize: [15, 30],
    iconAnchor: [6, 22],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });
var singleMarker = L.marker([41.200008, -8.686563], {icon: RedIcon} );
singleMarker.addTo(map);

var popup = singleMarker.bindPopup("<strong>Rua Gonçalves Zarco</strong><br><img width=300, height=100 src='./img/goncalves.jpg'/>")
popup.addTo(map);

var GoldIcon = new L.Icon({
    iconUrl: 'leaflet-color-markers-master/img/marker-icon-gold.png',
    shadowUrl: 'leaflet-color-markers-master/img/marker-shadow.png',
    iconSize: [15, 30],
    iconAnchor: [6, 22],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });
var singleMarker = L.marker([41.195101, -8.695852], {icon: GoldIcon} );
singleMarker.addTo(map);

var popup = singleMarker.bindPopup("<strong>Rua Brito Pais</strong><br><img width=300, height=100 src='./img/brito.jpg'/>")
popup.addTo(map);



var linha = L.geoJson(linea, {pointToLayer: function(feature,latlng){
    return L.marker(latlng);},
    onEachFeature: function(feature, layer){
    layer.bindPopup("<strong> Cuerpo de agua: </strong>"+feature.properties.DESIGNACAO);}});
    linha.addTo(map);



//Pontos


var markers = L.markerClusterGroup();


    var towns = L.geoJson(puntos, 
        {pointToLayer: function(feature, latlng){
            return L.marker(latlng,);
        },
        onEachFeature: function( feature, layer){
            var Ocurrencias = feature.properties.occur;
            
            

            layer.bindPopup("<strong>Incidencias: </strong>" + feature.properties.occur);
        
            layer.on("mouseover", function() {layer.openPopup();});
            layer.on("mouseout", function() {layer.closePopup();});
        }
    });


markers.addLayer(towns); // add it to the cluster group
map.addLayer(markers);		// add it to the map
map.fitBounds(markers.getBounds()); //set view on the cluster extend






//Painel de controlo das camadas
var overlays = {
    "Freguesias" : freguesias,
    "Câmara Matosinhos" : singleMarker,
    "Inundaciones" : markers,
    "Cuerpos de agua" : linha,
    "Rondas de rio": cheia,
   
};



L.control.layers(baselayers, overlays).addTo(map);



var scale = L.control.scale()
scale.addTo(map)




//Leyenda
var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Inudaciones de Matosinhos</h4>";
  div.innerHTML += '<i style="background: #ff0000"></i><span>Freguesias</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(http://agrega.educacion.es/galeriaimg/84/es_20070129_1_3000623/es_20070129_1_3000623_captured.jpg);background-repeat: no-repeat;"></i><span>Cuerpos de agua</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg);background-repeat: no-repeat;"></i><span>Inundaciones</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(http://www.clker.com/cliparts/N/a/G/A/e/V/map-marker-md.png);background-repeat: no-repeat;"></i><span>CMM</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(https://img.freepik.com/vector-gratis/fondo-lineas-onda-que-fluye-verde-elegante_1035-23418.jpg?w=2000);background-repeat: no-repeat;"></i><span>Ronda Rio</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTat8vJK35cJwkwYFj3TmgrFZxrbQI0Su-cow&usqp=CAU);background-repeat: no-repeat;"></i><span>Autoestrada do Litoral Norte</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(https://png.pngitem.com/pimgs/s/195-1955684_green-google-map-pin-hd-png-download.png);background-repeat: no-repeat;"></i><span>Av. Xanana Gusmão</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(https://cdn1.iconfinder.com/data/icons/color-bold-style/21/14_2-512.png);background-repeat: no-repeat;"></i><span>Rua Gonçalves Zarco</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(https://www.pngitem.com/pimgs/m/23-235474_yellow-map-marker-png-transparent-drop-pin-icon.png);background-repeat: no-repeat;"></i><span>Rua Brito Pais</span><br>';

  
  
  
  return div;
};

legend.addTo(map);
