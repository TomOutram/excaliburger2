
function initMap() {
			// The location of Uluru
			const auckland = { lat: -43.525650, lng: 172.639847 };
			const options = {
				zoom: 12,
				center: auckland
			}
			// The map, centered at Uluru
			const map = new google.maps.Map(document.getElementById("map"), options);
			// The marker, positioned at Uluru
			const marker = new google.maps.Marker({
				position: auckland,
				map: map,
			});
		}