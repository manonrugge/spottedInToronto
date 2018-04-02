// API KEY: AIzaSyA5HB93S_2yu6XjRk1LxECp06lcZMYImFA

function initMap() {
    const toronto = { lat: 43.656626, lng: -79.389145 };
    
    const map = new google.maps.Map(document.getElementById('map'), {
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
        design: { icon: './public/assets/Marker.svg' },
        maker: { icon: './public/assets/Marker.svg' },
        bike: { icon: './public/assets/Marker.svg' },
        brewery: { icon:'./public/assets/Marker.svg' },
        vintageClothing: { icon:'./public/assets/Marker.svg' },
        vintageHousewares: { icon: './public/assets/Marker.svg' },
        cafes: { icon: './public/assets/Marker.svg' }
    };


    // DESIGN SPOTS
    const designSpots = [
        [ '401 Richmond', 43.648138, -79.394525, 1 ],
        [ 'The Make Den', 43.659047, -79.440023, 2 ],
        [ 'The Shop', 43.652156, -79.433989, 3 ],
        [ 'Art And Sole Academy', 43.660275, -79.329488, 4 ],
        [ 'The Workroom', 43.641671, -79.431887, 5 ],
        [ 'Artscape Youngplace', 43.646899, -79.417549, 6 ],
        [ 'M.O.C.C.A.', 43.654615, -79.445207, 7 ],
        [ 'Design Exchange', 43.647708, -79.380329, 8 ],
        [ 'Art Metropole', 43.649778, -79.431774, 9 ],
        [ 'Harbourfront Center', 43.638749, -79.382722, 10 ],
    ];

    // Create markers
    for (let i = 0; i < designSpots.length; i++) {
        const design = designSpots[i];
        const marker = new google.maps.Marker({
            position: { lat: design[1], lng: design[2] },
            map: map,
            icon: icons['design'].icon,
            title: design[0],
            label: { text: `${design[3]}`, color: "pink" }
        });
    };
    

    //TORONTO MAKERS
    const makers = [
        ['Eleven Thirty', 43.652528, -79.433419, 1 ],
        ['YNOT', 43.668808, -79.466622, 2 ],
        ['T.D.M.', 43.639014, -79.443965, 3 ],
        ['Peace Collective', 43.647199, -79.419655, 4 ],
        ['Bookhou', 43.651967, -79.408319, 5 ],
        ['Yo Sox', 43.647409, -79.402331, 6 ],
        ['Crywolf', 43.646244, -79.419370, 7 ],
        ['Drake General Store', 43.643021, -79.424441, 8 ],
        ['North Standard', 43.639327, -79.443600, 9 ],
        ['Muttonhead', 43.649292, -79.450086, 10 ],
    ];

    // Create markers
    for (let i = 0; i < makers.length; i++) {
        const maker = makers[i];
        const marker = new google.maps.Marker({
            position: { lat: maker[1], lng: maker[2] },
            map: map,
            icon: icons['maker'].icon,
            title: maker[0],
            label: { text: `${maker[3]}`, color: "white" }
        });
    };

    
    // MICRO-BREWERIES
    const breweries = [
        ['Bandit Brewery', 43.652517, -79.449539, 1],
        ['Halo Brewery', 43.661773, -79.446447, 2],
        ['Henderson Brewing Co.', 43.653625, -79.445250, 3],
        ['Laylow Brewery', 43.652445, -79.433799, 4],
        ['Bellwoods Brewery', 43.647108, -79.420069 , 5],
        ['Blood Brothers Brewing', 43.669924, - 79.465349, 6],
        ['Indie Alehouse', 43.665551, -79.465349, 7],
        ['Burdock', 43.659736, -79.437849, 8],
        ['Junction Brewery', 43.673430, -79.478605, 9],
        ['Left Field Brewery', 43.673809, -79.330514, 10],
    ];

    for (let i = 0; i < breweries.length; i++) {
        const brewery = breweries[i];
        const marker = new google.maps.Marker({
            position: { lat: brewery[1], lng: brewery[2] },
            map: map,
            icon: icons['brewery'].icon,
            title: brewery[0],
            label: {text: `${brewery[3]}`, color: "yellow" }
        });
    };

   
    // VINTAGE CLOTHING 
    const vintageClothing = [
        ['Chosen', 43.649666, -79.434950, 1],
        ['Penny Arcade Vintage', 43.649244, -79.421890, 2],
        ['You, Babe', 43.649695, -79.435273, 3],
        ['House of Vintage', 43.641766, -79.430381, 4],
        ['96 Tears Vintage', 43.639011, -79.445266, 5],
        ['Kensington Market', 43.655051, -79.401802, 6],
        ['In Vintage We Trust', 43.639900, -79.440695, 7],
        ['Mama Loves You Vintage', 43.647829, -79.399868, 8],
        ['Public Butter Vintage', 43.642003, -79.430348, 9]
    ];

    for (let i = 0; i < vintageClothing.length; i++) {
        const vClothing = vintageClothing[i];
        const marker = new google.maps.Marker({
            position: { lat: vClothing[1], lng: vClothing[2] },
            map: map,
            icon: icons['vintageClothing'].icon,
            title: vClothing[0],
            label: { text: `${vClothing[3]}`, color: "white" }
        });
    };


    // VINTAGE HOUSEWARES
    const vintageHousewares = [
        ['Mrs. Huizenga', 43.639907, -79.446908, 1 ],
        ['1698 Queen Antiques', 43.639078, -79.444947, 2],
        ['Smash Salvage', 43.665587, -79.465542, 3 ],
        ['Bungalow', 43.655750, -79.402398, 4 ],
        ['Elephant In The Attic', 43.650012, -79.434956, 5 ],
        ['Door Number Two', 43.665540, -79.462566, 6 ],
        ['The Art of Demolition', 43.665984, -79.464847, 7 ],
        ['Williams Design', 43.665835, -79.464590, 8 ],
        ['Studio 1484', 43.640558, -79.437411, 9 ],
    ];

    for (let i = 0; i < vintageHousewares.length; i++) {
        const vHousewares = vintageHousewares[i];
        const marker = new google.maps.Marker({
            position: { lat: vHousewares[1], lng: vHousewares[2] },
            map: map,
            icon: icons['vintageHousewares'].icon,
            title: vHousewares[0],
            label: { text: `${vHousewares[3]}`, color: "white" }
        });
    }


    // BIKE ROUTES
    const GraffitiAlley = { lat: 43.647818, lng: -79.398713 };
    const Island = { lat: 4, lng: -73 };
    const LeslieSpit = { lat: 4, lng: -7 };
    const WestTorontoRailpath = { lat: 4, lng: -7 };
    const Lakeshore = { lat: 4, lng: -7 };
    const HighPark = { lat: 4, lng: -7 };
    const DonValley = { lat: 4, lng: -7 };


    // WORK CAFES
    
} 


// filter functionality goes here

filterSelection("all")
function filterSelection(content) {
    let spot, i;
    spot = document.getElementsByClassName("spot");
    if (content == "all") content = "";
    for (i = 0; i < spot.length; i++) {
        RemoveClass(spot[i], "show");
        if (spot[i].className.indexOf(content) > -1) AddClass(spot[i], "show");
    }
}

function AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}