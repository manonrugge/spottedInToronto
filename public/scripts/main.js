'use strict';

// API KEY: AIzaSyA5HB93S_2yu6XjRk1LxECp06lcZMYImFA

function initMap() {
    var toronto = { lat: 43.656626, lng: -79.389145 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: toronto,
        clickableIcons: true,
        scrollwheel: false,
        mapTypeId: 'roadmap',
        styles: [{ "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f5f5" }] }, { "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#bdbdbd" }] }, { "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#757575" }] }, { "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{ "color": "#e5e5e5" }] }, { "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "road",
            "elementType": "geometry",
            "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#757575" }] }, { "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{ "color": "#dadada" }] }, { "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#616161" }] }, { "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{ "color": "#e5e5e5" }] }, { "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#c9c9c9" }] }, { "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#9e9e9e" }] }]
    });

    var icons = {
        design: { icon: 'public/assets/Marker.svg' },
        brand: { icon: 'public/assets/Marker.svg' },
        bike: { icon: 'public/assets/Marker.svg' },
        brewery: { icon: 'public/assets/Marker.svg' },
        vintageClothing: { icon: 'public/assets/Marker.svg' },
        vintageHousewares: { icon: 'public/assets/Marker.svg' },
        cafes: { icon: 'public/assets/Marker.svg' }
    };

    // DESIGN SPOTS
    var richnmond401 = { lat: 43.648138, lng: -79.394525 };
    var makeDen = { lat: 43.659047, lng: -79.440023 };
    var theShop = { lat: 43.652156, lng: -79.433989 };
    var artAndSole = { lat: 43.660275, lng: -79.329488 };
    var workroom = { lat: 43.641671, lng: -79.431887 };
    var artscape = { lat: 43.646899, lng: -79.417549 };
    var mocca = { lat: 43.654615, lng: -79.445207 };
    var designExchange = { lat: 43.647708, lng: -79.380329 };
    var artMetropole = { lat: 43.649778, lng: -79.431774 };
    var harbourfront = { lat: 43.638749, lng: -79.382722 };

    var designSpots = [{ position: new google.maps.LatLng(richnmond401) }, { position: new google.maps.LatLng(makeDen) }, { position: new google.maps.LatLng(theShop) }, { position: new google.maps.LatLng(artAndSole) }, { position: new google.maps.LatLng(workroom) }, { position: new google.maps.LatLng(artscape) }, { position: new google.maps.LatLng(mocca) }, { position: new google.maps.LatLng(designExchange) }, { position: new google.maps.LatLng(artMetropole) }, { position: new google.maps.LatLng(harbourfront) }];

    // Create markers
    designSpots.forEach(function (location) {
        var marker = new google.maps.Marker({
            position: location.position,
            icon: icons['design'].icon,
            map: map,
            label: { text: '3', color: "white" }
        });
    });

    //TORONTO MAKERS
    var elevenThirty = { lat: 43.652528, lng: -79.433419 };
    var ynot = { lat: 43.668808, lng: -79.466622 };
    var tdm = { lat: 43.639014, lng: -79.443965 };
    var peaceCollective = { lat: 43.647199, lng: -79.419655 };
    var bookhou = { lat: 43.651967, lng: -79.408319 };
    var yoSox = { lat: 43.647409, lng: -79.402331 };
    var crywolf = { lat: 43.646244, lng: -79.419370 };
    var drakeGeneral = { lat: 43.643021, lng: -79.424441 };
    var northStandard = { lat: 43.639327, lng: -79.443600 };
    var muttonhead = { lat: 43.649292, lng: -79.450086 };

    var brandSpots = [{ position: new google.maps.LatLng(elevenThirty) }, { position: new google.maps.LatLng(ynot) }, { position: new google.maps.LatLng(tdm) }, { position: new google.maps.LatLng(peaceCollective) }, { position: new google.maps.LatLng(bookhou) }, { position: new google.maps.LatLng(yoSox) }, { position: new google.maps.LatLng(crywolf) }, { position: new google.maps.LatLng(drakeGeneral) }, { position: new google.maps.LatLng(northStandard) }, { position: new google.maps.LatLng(muttonhead) }];

    // Create markers
    brandSpots.forEach(function (location) {
        var marker = new google.maps.Marker({
            position: location.position,
            icon: icons['brand'].icon,
            map: map,
            label: { text: '2', color: "white" }
        });
    });

    // MICRO-BREWERIES
    var bandit = { lat: 43.652517, lng: -79.449539 };
    var halo = { lat: 43.661773, lng: -79.446447 };
    var henderson = { lat: 43.653625, lng: -79.445250 };
    var laylow = { lat: 43.652445, lng: -79.433799 };
    var bellwoods = { lat: 43.647108, lng: -79.420069 };
    var leftfield = { lat: 43.673809, lng: -79.330514 };
    var bloodBrothers = { lat: 43.669924, lng: -79.436523 };
    var indieAle = { lat: 43.665551, lng: -79.465349 };
    var burdock = { lat: 43.659736, lng: -79.437849 };
    var junction = { lat: 43.673430, lng: -79.478605 };

    var brewerySpots = [{ position: new google.maps.LatLng(bandit) }, { position: new google.maps.LatLng(halo) }, { position: new google.maps.LatLng(henderson) }, { position: new google.maps.LatLng(laylow) }, { position: new google.maps.LatLng(bellwoods) }, { position: new google.maps.LatLng(leftfield) }, { position: new google.maps.LatLng(bloodBrothers) }, { position: new google.maps.LatLng(indieAle) }, { position: new google.maps.LatLng(burdock) }, { position: new google.maps.LatLng(junction) }];

    // Create markers
    brewerySpots.forEach(function (location) {
        var marker = new google.maps.Marker({
            position: location.position,
            icon: icons['brand'].icon,
            map: map,
            label: { text: '1', color: "white" }
        });
    });

    // BIKE ROUTES
    var graffiti = { lat: 43.647818, lng: -79.398713 };
    var island = { lat: 4, lng: -73 };
    var leslieSpit = { lat: 4, lng: -7 };
    var railpath = { lat: 4, lng: -7 };
    var lakeshore = { lat: 4, lng: -7 };
    var highPark = { lat: 4, lng: -7 };
    var donValley = { lat: 4, lng: -7 };

    // VINTAGE CLOTHING
    var chosen = { lat: 4, lng: -7 };
    var pennyArcade = { lat: 4, lng: -73 };
    var youBabe = { lat: 4, lng: -7 };
    var vintage69 = { lat: 4, lng: -7 };
    var tears96 = { lat: 4, lng: -7 };
    var kensington = { lat: 4, lng: -7 };
    var vintageWeTrust = { lat: 4, lng: -7 };
    var mamaLovesYou = { lat: 4, lng: -7 };
    var publicButter = { lat: 4, lng: -7 };

    // VINTAGE HOUSEWARES
    var mrsHuzenga = { lat: 4, lng: -7 };
    var queenAntiques = { lat: 4, lng: -73 };
    var smash = { lat: 4, lng: -7 };
    var bungalow = { lat: 4, lng: -7 };
    var elephant = { lat: 4, lng: -7 };
    var doorNumber2 = { lat: 4, lng: -7 };
    var demolition = { lat: 4, lng: -7 };
    var williams = { lat: 4, lng: -7 };
    var studio1484 = { lat: 4, lng: -7 };

    // CAFES TO WORK IN
    var safehouse = { lat: 4, lng: -7 };
    var temperedRoom = { lat: 4, lng: -73 };
    var runAndGun = { lat: 4, lng: -7 };
    var loveless = { lat: 4, lng: -7 };
    var f = { lat: 4, lng: -7 };
    var i = { lat: 4, lng: -7 };
    var n = { lat: 4, lng: -7 };
    var d = { lat: 4, lng: -7 };
    var m = { lat: 4, lng: -7 };
    var o = { lat: 4, lng: -7 };
}

filterSelection("all");
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("spot");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//     function filterToggleDisplay() {
//         $('input[name=coffee]').click(function () {
//         console.log('hello')

//         $('.bar').toggleClass('hidden')
//         $('.vintage').toggleClass('hidden')
//     })
//     $('input[name=bar]').click(function () {
//         console.log('hello')

//         $('.coffee').toggleClass('hidden')
//         $('.vintage').toggleClass('hidden')
//     })
//     $('input[name=vintage]').click(function () {
//         console.log('hello')

//         $('.coffee').toggleClass('hidden')
//         $('.bar').toggleClass('hidden')
//     })
// }
// filterToggleDisplay();


// let $filterCheckboxes = $('input[type="checkbox"]');

// $filterCheckboxes.on('change', function () {

//     const selectedFilters = {};

//     $filterCheckboxes.filter(':checked').each(function () {

//         if (!selectedFilters.hasOwnProperty(this.name)) {

//             selectedFilters[this.name] = [];
//         }

//         selectedFilters[this.name].push(this.value);

//     });

//     // create a collection containing all of the filterable elements
//     let $filteredResults = $('.spot');

//     // loop over the selected filter name -> (array) values pairs
//     $.each(selectedFilters, function (name, filterValues) {

//         // filter each .flower element
//         $filteredResults = $filteredResults.filter(function () {

//             let matched = false,
//             currentFilterValues = $(this).data('category').split('');

//             // loop over each category value in the current .flower's data-category
//             $.each(currentFilterValues, function (_, currentFilterValue) {

//                 // if the current category exists in the selected filters array
//                 // set matched to true, and stop looping. as we're ORing in each
//                 // set of filters, we only need to match once

//                 if ($.inArray(currentFilterValue, filterValues) != -1) {
//                     matched = true;
//                     return false;
//                 }
//             });

//             // if matched is true the current .flower element is returned
//             return matched;

//         });
//     });

//     $('.spot').hide().filter($filteredResults).show();
//     console.log($filteredResults)
// });


// ***index????
// const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//const labelIndex = 0;

// // Create markers for design spots.
// designSpots.forEach(function (location) {
//     const marker = new google.maps.Marker({
//         position: location.position,
//         icon: icons['design'].icon,
//         map: map,
//         label: labels[labelIndex++ % labels.length],
//     });
// });

// ***NUMBER TESTING
// brewerySpots.forEach(function (location) {

//     for (var i = 0; i < location.length; i++) {
//        const image = new google.maps.MarkerImage(
//             '{{http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=7}}' + (i + 1) + '|FF0000|000000x')
//             // new google.maps.Size(68, 49),
//             // new google.maps.Point(0, 0),
//             // new google.maps.Point(19, 49));
//     }

//     const marker = new google.maps.Marker({
//         position: location.position,
//         icon: image,
//         map: map,
//         labelClass: "mapIconLabel" // the CSS class for the label
//         // label: labels[labelIndex++ % labels.length]
//     });
// });