const map = L.map('map').setView([49.244, 4.063], 17);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
	const marker = L.marker([49.2445, 4.0625]).addTo(map);
	marker.bindPopup("C'EST LE BATIMENT 3");
	const circle = L.circle([49.24393, 4.06367], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 27
	}).addTo(map);
	const polygon = L.polygon([
		[49.2446, 4.0627],
		[49.2439, 4.06265],
		[49.24391, 4.06198],
		[49.24462, 4.06205]
	], { 
		color: 'Blue',
		fillColor: 'blue',
		fillOpacity: 0.2,
	 }).addTo(map);