'use strict';

// API KEY: AIzaSyA5HB93S_2yu6XjRk1LxECp06lcZMYImFA
// * ajax call


var map = void 0;

function initMap() {
    var toronto = { lat: 43.656626, lng: -79.389145 };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: toronto,
        clickableIcons: true,
        scrollwheel: false,
        mapTypeId: 'roadmap',
        styles: [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#f5f5f5"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#bdbdbd"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dadada"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c9c9c9"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }]

    });

    // const marker = new google.maps.Marker({
    //     position: toronto,
    //     map: map
    // });  


    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

    var icons = {
        design: {
            icon: 'public/assets/1.png'
        },
        bike: {
            icon: 'public/assets/3.png'
        },
        brewery: {
            icon: 'public/assets/3.png'
        }
    };

    // design spots
    var richnmond401 = { lat: 43.648138, lng: -79.394525 };
    var makeDen = { lat: 4, lng: 4 };
    var elevenThirty = { lat: 4, lng: 4 };
    var ynot = { lat: 4, lng: 4 };
    var theShop = { lat: 4, lng: 4 };
    var artAndSole = { lat: 4, lng: 4 };
    var workroom = { lat: 4, lng: 4 };
    var paperhouse = { lat: 4, lng: 4 };

    // bike routes
    var graffiti = { lat: 43.647818, lng: -79.398713 };
    var island = { lat: 4, lng: -73 };
    var leslieSpit = { lat: 4, lng: -7 };
    var railpath = { lat: 4, lng: -7 };
    var lakeshore = { lat: 4, lng: -7 };

    // Micro-breweries
    var bandit = { lat: 4, lng: -7 };
    var halo = { lat: 4, lng: -7 };
    var henderson = { lat: 4, lng: -7 };
    var laylow = { lat: 43.652445, lng: -79.433799 };
    var bellwoods = { lat: 43.647108, lng: -79.420069 };
    var leftfield = { lat: 43.673809, lng: -79.330514 };
    var bloodBrothers = { lat: 43.669924, lng: -79.436523 };
    var indieAle = { lat: 43.665551, lng: -79.465349 };
    var burdock = { lat: 43.659736, lng: -79.437849 };
    var junction = { lat: 43.673430, lng: -79.478605 };

    var features = [{
        position: new google.maps.LatLng(richnmond401),
        type: 'design'
    }, {
        position: new google.maps.LatLng(graffiti),
        type: 'bike'
    }, {
        position: new google.maps.LatLng(bandit),
        type: 'brewery'
    }];

    // var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // var labelIndex = 0;

    // Create markers.
    features.forEach(function (feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
            // label: labels[labelIndex++ % labels.length],
        });
    });
}

function filterToggleDisplay() {

    $('input[name=coffee]').click(function () {
        console.log('hello');

        $('.bar').toggleClass('hidden');
        $('.vintage').toggleClass('hidden');
    });
    $('input[name=bar]').click(function () {
        console.log('hello');

        $('.coffee').toggleClass('hidden');
        $('.vintage').toggleClass('hidden');
    });
    $('input[name=vintage]').click(function () {
        console.log('hello');

        $('.coffee').toggleClass('hidden');
        $('.bar').toggleClass('hidden');
    });
}

filterToggleDisplay();