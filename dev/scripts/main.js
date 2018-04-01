// API KEY: AIzaSyA5HB93S_2yu6XjRk1LxECp06lcZMYImFA

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
            { "elementType": "geometry","stylers": [ { "color": "#f5f5f5"} ]},
            { "elementType": "labels.icon", "stylers": [ { "visibility": "off"} ]},
            { "elementType": "labels.text.fill", "stylers": [ { "color": "#616161"} ]},
            { "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f5f5"} ]},
            { "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [ { "color": "#bdbdbd"} ]},
            { "featureType": "poi",
                "elementType": "geometry",
                "stylers": [ {"color": "#eeeeee"} ]},
            { "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [ {"color": "#757575"} ]},
            { "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [ {"color": "#e5e5e5" } ]},
            { "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [ {"color": "#9e9e9e"} ]},
            { "featureType": "road",
                "elementType": "geometry",
                "stylers": [ {"color": "#ffffff" } ]},
            { "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [ {"color": "#757575"} ]},
            { "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [ {"color": "#dadada"} ]},
            { "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [ {"color": "#616161"} ]},
            { "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [ {"color": "#9e9e9e"} ]},
            { "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [ {"color": "#e5e5e5"} ]},
            { "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [ {"color": "#eeeeee"} ]},
            { "featureType": "water",
                "elementType": "geometry",
                "stylers": [ {"color": "#c9c9c9"} ]},
            { "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [ { "color": "#9e9e9e"} ]}
        ]

    });

    const icons = {
        design: { icon: 'public/assets/1.png' },
        fashion: { icon: 'public/assets/2.png' },
        bike: { icon: 'public/assets/3.png' },
        brewery: { icon:'public/assets/3.png' },
        vintageClothing: { icon:'public/assets/3.png' },
        vintageHousewares: { icon: 'public/assets/3.png' },
        cafes: { icon: 'public/assets/3.png' }
    };


    // ART & DESIGN SPOTS
    const richnmond401 = { lat: 43.648138, lng: -79.394525 };
    const makeDen = { lat: 43.659047, lng: -79.440023 };
    const theShop = { lat: 43.652156, lng: -79.433989 };
    const artAndSole = { lat: 43.660275, lng: -79.329488 };
    const workroom = { lat: 43.641671, lng: -79.431887 };
    const artscape = { lat: 43.646899, lng: -79.417549 };
    const mocca = { lat: 43.654615, lng: -79.445207 };
    const designExchange = { lat: 43.647708, lng: -79.380329 };
    const artMetropole = { lat: 43.649778, lng: -79.431774 };
    const harbourfront = { lat: 43.638749, lng: -79.382722 };
    
    const designSpots = [
        { position: new google.maps.LatLng(richnmond401) },
        { position: new google.maps.LatLng(makeDen) },
        { position: new google.maps.LatLng(theShop) },
        { position: new google.maps.LatLng(artAndSole) },
        { position: new google.maps.LatLng(workroom) },
        { position: new google.maps.LatLng(artscape) },
        { position: new google.maps.LatLng(mocca) },
        { position: new google.maps.LatLng(designExchange) },
        { position: new google.maps.LatLng(artMetropole) },
        { position: new google.maps.LatLng(harbourfront) },
    ];

    // Create markers
    designSpots.forEach(function (location) {
        const marker = new google.maps.Marker({
            position: location.position,
            icon: icons['design'].icon,
            map: map
        });
    });
    

    //FASHION STORES
    const elevenThirty = { lat: 43.652528, lng: -79.433419 };
    const ynot = { lat: 43.668808, lng: -79.466622 };
    const tdm = { lat: 43.639014, lng: -79.443965 };
    const peaceCollective = { lat: 43.647199, lng: -79.419655 };
    const bookhou = { lat: 43.651967, lng: -79.408319 };
    const yoSox = { lat: 43.647409, lng: -79.402331 };
    const crywolf = { lat: 43.646244, lng: -79.419370 };
    const drakeGeneral = { lat: 43.643021, lng: -79.424441 };
    const northStandard = { lat: 43.639327, lng: -79.443600 };
    const muttonhead = { lat: 43.649292, lng: -79.450086 };

    const fashionSpots = [
        { position: new google.maps.LatLng(elevenThirty) },
        { position: new google.maps.LatLng(ynot) },
        { position: new google.maps.LatLng(tdm) },
        { position: new google.maps.LatLng(peaceCollective) },
        { position: new google.maps.LatLng(bookhou) },
        { position: new google.maps.LatLng(yoSox) },
        { position: new google.maps.LatLng(crywolf) },
        { position: new google.maps.LatLng(drakeGeneral) },
        { position: new google.maps.LatLng(northStandard) },
        { position: new google.maps.LatLng(muttonhead) },
    ];

    // Create markers
    fashionSpots.forEach(function (location) {
        const marker = new google.maps.Marker({
            position: location.position,
            icon: icons['fashion'].icon,
            map: map
        });
    });

    
    // MICRO-BREWERIES
    const bandit = { lat: 43.652517, lng: -79.449539};
    const halo = { lat: 43.661773, lng: -79.446447 };
    const henderson = { lat: 43.653625, lng: -79.445250 };
    const laylow = { lat: 43.652445, lng: -79.433799 };
    const bellwoods = { lat: 43.647108, lng: -79.420069 };
    const leftfield = { lat: 43.673809, lng: -79.330514 };
    const bloodBrothers = { lat: 43.669924, lng: -79.436523 };
    const indieAle = { lat: 43.665551, lng: - 79.465349 };
    const burdock = { lat: 43.659736, lng: -79.437849 };
    const junction = { lat: 43.673430, lng: -79.478605 };
    
    const brewerySpots = [
        { position: new google.maps.LatLng(bandit) },
        { position: new google.maps.LatLng(halo) },
        { position: new google.maps.LatLng(henderson) },
        { position: new google.maps.LatLng(laylow) },
        { position: new google.maps.LatLng(bellwoods) },
        { position: new google.maps.LatLng(leftfield) },
        { position: new google.maps.LatLng(bloodBrothers) },
        { position: new google.maps.LatLng(indieAle) },
        { position: new google.maps.LatLng(burdock) },
        { position: new google.maps.LatLng(junction) },
    ];

    // Create markers
    brewerySpots.forEach(function (location) {
        const marker = new google.maps.Marker({
            position: location.position,
            icon: icons['brewery'].icon,
            map: map
        });
    });
    
    
    // BIKE ROUTES
    const graffiti = { lat: 43.647818, lng: -79.398713 };
    const island = { lat: 4, lng: -73 };
    const leslieSpit = { lat: 4, lng: -7 };
    const railpath = { lat: 4, lng: -7 };
    const lakeshore = { lat: 4, lng: -7 };
    const highPark = { lat: 4, lng: -7 };
    const donValley = { lat: 4, lng: -7 };
    
    // VINTAGE CLOTHING
    const chosen = { lat: 4, lng: -7 };
    const pennyArcade = { lat: 4, lng: -73 };
    const youBabe = { lat: 4, lng: -7 };
    const vintage69 = { lat: 4, lng: -7 };
    const tears96 = { lat: 4, lng: -7 };
    const kensington = { lat: 4, lng: -7 };
    const vintageWeTrust = { lat: 4, lng: -7 };
    const mamaLovesYou = { lat: 4, lng: -7 };
    const publicButter = { lat: 4, lng: -7 };
    
    // VINTAGE HOUSEWARES
    const mrsHuzenga = { lat: 4, lng: -7 };
    const queenAntiques = { lat: 4, lng: -73 };
    const smash = { lat: 4, lng: -7 };
    const bungalow = { lat: 4, lng: -7 };
    const elephant = { lat: 4, lng: -7 };
    const doorNumber2= { lat: 4, lng: -7 };
    const demolition = { lat: 4, lng: -7 };
    const williams = { lat: 4, lng: -7 };
    const studio1484 = { lat: 4, lng: -7 };

    // CAFES TO WORK IN
    const safehouse = { lat: 4, lng: -7 };
    const temperedRoom = { lat: 4, lng: -73 };
    const runAndGun = { lat: 4, lng: -7 };
    const loveless = { lat: 4, lng: -7 };
    const f = { lat: 4, lng: -7 };
    const i = { lat: 4, lng: -7 };
    const n = { lat: 4, lng: -7 };
    const d = { lat: 4, lng: -7 };
    const m = { lat: 4, lng: -7 };
    const o = { lat: 4, lng: -7 };    
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





// ***index????
// var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var labelIndex = 0;

// // Create markers for design spots.
// designSpots.forEach(function (location) {
//     const marker = new google.maps.Marker({
//         position: location.position,
//         icon: icons['design'].icon,
//         map: map,
//         label: labels[labelIndex++ % labels.length],
//     });
// });