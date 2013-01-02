(function () {
	'use strict';

	var map = document.createElement('div');
	map.setAttribute('id', 'map');
	document.body.appendChild(map);


	setTimeout(function () {
		var template = 'http://c.tiles.mapbox.com/v3/examples.map-szwdot65/{Z}/{X}/{Y}.png',
		    provider = new MM.TemplatedLayer(template),
		    map = new MM.Map('map', provider);

		// Check if geolocation is supported
		if ("geolocation" in navigator) {

			// Get the current location
			navigator.geolocation.getCurrentPosition(function (position) {

				// Instanciate the map
				map.setCenterZoom(new MM.Location(position.coords.latitude, position.coords.longitude), 11);
			});
		}
	}, 1000);

}());
