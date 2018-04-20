//var location = {lat: 41.901987, lng: -87.622139};
function initMap() {
	//alert('yo yo yo');
  var here = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 41.901987, lng: -87.622139},
  zoom: 16
  });

  var marker = new google.maps.Marker({
    position: {lat: 41.901987, lng: -87.622139},
    map: here,
	  //animation: google.maps.Animation.DROP,
	  draggable:true,
	  //icon: '../media/marker1.png',
	  //title: 'Look here!'
  });
  marker.addListener('click', toggleBounce);

  var contentString = '<h1>My Summer Getaway Spot</h1>';

  var inforwindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('mouseover', function() {
	  infowindow.open(here, marker);
  });
	}
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
	} 

//google.maps.event.addDOMListener(window, 'load', initMap);