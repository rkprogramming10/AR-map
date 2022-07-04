let latitude, longitude, destination;

// Initializing Mapbox

$(document).ready( function(){
	init_geolocation()

	alert("Please Allow the device to know your Location!...")
})
$(function(){
	$("#navigate-button").click(function(){
		window.location.href = `ar_navigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
	})
})



function init_geolocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success)

	}else{
		alert("Your browser does not supports GeoLocation Services!..")
	}
};

function success(position){
	longitude = position.coords.longitude
	latitude = position.coords.latitude
	mapboxgl.accessToken =
    "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA";

	var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 16,
  });

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  );

  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );

  map.on('click', function(e){
	destination = e.lngLat

	
  })
}
