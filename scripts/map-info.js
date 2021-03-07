
// numbers
const labels = "123456";
let labelIndex = 0;

function initMap() {
	// Location of the Map
	const chch = { lat: -43.525650, lng: 172.639847 };
	const options = {
		zoom: 12,
		center: chch,
		mapId: '86a77c5357e83715',
		mapTypeControl: false,
		streetViewControl: false
	}
	// Map object
	const map = new google.maps.Map(document.getElementById("map"), options);
	
	//stores array
	const stores = [
		[
			"Linwood",
			-43.528888,
			172.668986,
			"1"
		],
		[
			"Shirley",
			-43.493798,
			172.661814,
			"2"
		],
		[
			"Papanui",
			-43.495562,
			172.607255,
			"3"
		],
		[
			"Riccarton",
			-43.528225,
			172.600904,
			"4"
		],
		[
			"Sydenham",
			-43.545700,
			172.636847,
			"5"
		],
		[
			"Hornby",
			-43.542038,
			172.525698,
			"6"
		]
	];
	
	for(let i = 0; i < stores.length; i++) {
		const currStore = stores[i];
		
		// Map markers
		const marker = new google.maps.Marker({
			title: currStore[0],
			position: { lat: currStore[1], lng: currStore[2] },
			map: map,
			icon: {
				url: 'images/num-marker.svg',
				scaledSize: new google.maps.Size(50, 50),
				labelOrigin: new google.maps.Point(25, 20)					
			},
			label: {
				text: currStore[3],
				fontSize: "20px",
				fontWeight: "bold"
			}
		});
	}
	
}