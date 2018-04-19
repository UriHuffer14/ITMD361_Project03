var center;
function initMap() {
	//alert('yo yo yo');
  var here = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 41.901987, lng: -87.622139},
  zoom: 15
  });

  var marker = new google.maps.Marker({
    position: center,
    map: here,
	  animation: google.maps.Animation.DROP,
	  draggable:true,
	  icon: 'marker.jpg',
	  title: 'Look here!'
  });
  /*marker.addListener('click', toggleBounce);

  var contentString = '<h1>My Summer Getaway Spot</h1>';

  var inforwindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('mouseover', function() {
	  infowindow.open(here, marker);
  });*/
	}
/*function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
	} 
*/
//google.maps.event.addDOMListener(window, 'load', initMap);