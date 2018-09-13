$(document).ready(function () {

    addCard();

    function makeCard(index, url, title) {
        var card = $(
            `
            <div id="card${index}" class="col s6 m4">
                <div class="card">
                    <div class="card-image">
                        <img src="${url}">
                        <span class="card-title gradient">"${title}"</span>
                    </div>
                    <div class="card-content">
                        <strong>Card Content</strong>
                    </div>
                </div>
            </div>
            `
        );
        $(".addCardThree").append(card);
    }

    function addCard() {
        $.get("api/happyhour", function (data) {
            var arr = []

            for (var i = 0; i < data.length; i++){
                arr.push(data[i].name);
                makeCard(i, data[i].image, data[i].name);
    
            }

            console.log(arr)
            var map;
            var service;
            var infowindow;
            var barNames = arr
            var userLocation;
            var x = 0;

            var queryUrl = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCVf591AZ-evHODFReCvcQ56eAJZecmLgc";

            $.ajax({
                url: queryUrl,
                method: "POST",

            }).then(function(response){
                userLocation = response.location;
                initMap();
            });


            var initMap = function() {
                map = new google.maps.Map(document.getElementById('map'), {
                    center: userLocation, "accuracy": 50,
                    zoom: 12
                });
                
                infowindow = new google.maps.InfoWindow();
                service = new google.maps.places.PlacesService(map);
                findplaces();
            }

            function findplaces(){
                service.findPlaceFromQuery({ 
                    query: barNames[x],
                    fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry']
                },callback);
            }

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        console.log(barNames[x] + " found");
                        createMarker(results[i], x);
                    }
                }
                x++;
                if(x < barNames.length){
                    findplaces();
                }
            };

            function createMarker(place, index) {
                var image = '../images/logo2thumb.png'
                var placeLoc = place.geometry.location;
                var marker = new google.maps.Marker({
                    map: map,
                    icon: image,
                    position: place.geometry.location
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow = new google.maps.InfoWindow();
                    console.log(infowindow);
                    infowindow.setContent(
                    `<div id="content"> 
                        <div id="siteNotice"> 
                        </div>

                        <h5 id="firstHeading" class="firstHeading">
                        ` + place.name + `
                        </h5> 
                        
                        <div id="bodyContent"> 

                            <h6>
                            <a href="#card${index}"> 
                            More Info!</a> 
                            </h6>

                        </div> 
                    </div>`);
                    infowindow.open(map, this);
                });
            }
        });
    }

});