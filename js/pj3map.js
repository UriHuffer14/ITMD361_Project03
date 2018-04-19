function initMap() {
	alert('yo yo yo');
  var here = new google.maps.Map(document.getElementbyId('canvas'), {
  center: {lat: 41.901987, lng: -87.622139}, /*can center on variable mylocation w/ new google.maps.LatLng(, );*/
  zoom: 8
  });

	
var marker = new google.maps.Marker({
  position: center,
  map: here,
	animation: goole.maps.Animation.DROP,
	draggable:true,
	icon: 'marker.jpg'
	title: 'Look here!'
});
marker.addListener('click', toggleBounce);

var contentString = 'Getaway Spot';

var inforwindow = new google.maps.InfoWindow({
content: contentString
});

google.maps.event.addListener(marker, 'mouseover', function() {
	infowindow.open(here, marker);
});


}