// API KEY: AIzaSyA5HB93S_2yu6XjRk1LxECp06lcZMYImFA
// * ajax call


let map;

function initMap() {
    const toronto = { lat: 43.656626, lng: -79.389145 };
    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: toronto,
        clickableIcons: true,
        scrollwheel: false,
        mapTypeId: 'roadmap',
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]

    });

    const marker = new google.maps.Marker({
        position: uluru,
        map: map
    });  
}

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


    const icons = {
        design: {
            icon: 'public/assets/1.png'
        },
        bike: {
            icon: 'public/assets/3.png'
        },
        brewery: {
            icon:'public/assets/3.png'
        }
    };

    // design spots
    const richnmond401 = { lat: 43.648138, lng: -79.394525 };
    const makeDen = { lat: 4, lng: 4};
    const elevenThirty = { lat: 4, lng: 4 };
    const ynot = { lat: 4, lng: 4 };
    const theShop = { lat: 4, lng: 4 };
    const artAndSole = { lat: 4, lng: 4 };
    const workroom = { lat: 4, lng: 4 };
    const paperhouse = { lat: 4, lng: 4 };
 
    // bike routes
    const graffiti = { lat: 43.647818, lng: -79.398713 };
    const island = { lat: 4, lng: -73 };
    const leslieSpit = { lat: 4, lng: -7 };
    const railpath = { lat: 4, lng: -7 };
    const lakeshore = { lat: 4, lng: -7 };
    
    // Micro-breweries
    const bandit = { lat: 4, lng: -7};
    const halo = { lat: 4, lng: -7 };
    const henderson = { lat: 4, lng: -7 };
    const laylow = { lat: 43.652445, lng: -79.433799 };
    const bellwoods = { lat: 43.647108, lng: -79.420069 };
    const leftfield = { lat: 43.673809, lng: -79.330514 };
    const bloodBrothers = { lat: 43.669924, lng: -79.436523 };
    const indieAle = { lat: 43.665551, lng: - 79.465349 };
    const burdock = { lat: 43.659736, lng: -79.437849 };
    const junction = { lat: 43.673430, lng: -79.478605 };
    

    var features = [
        {
            position: new google.maps.LatLng(richnmond401),
            type: 'design'
        }, {
            position: new google.maps.LatLng(graffiti),
            type: 'bike'
        }, {
            position: new google.maps.LatLng(bandit),
            type: 'brewery'
        },
    ];
    
    // var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // var labelIndex = 0;

    // Create markers.
    features.forEach(function (feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map,
            // label: labels[labelIndex++ % labels.length],
        });
    });
}
 

function filterToggleDisplay() {

    $('input[name=coffee]').click(function () {
        console.log('hello')

        $('.bar').toggleClass('hidden')
        $('.vintage').toggleClass('hidden')
    })
    $('input[name=bar]').click(function () {
        console.log('hello')

        $('.coffee').toggleClass('hidden')
        $('.vintage').toggleClass('hidden')
    })
    $('input[name=vintage]').click(function () {
        console.log('hello')

        $('.coffee').toggleClass('hidden')
        $('.bar').toggleClass('hidden')
    })
}

filterToggleDisplay();

