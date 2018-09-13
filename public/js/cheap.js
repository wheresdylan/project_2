$(document).ready(function () {

    addCard();

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    };

    $("button").on("click", function () {
        //$(AJAX call to api- for searching cheap drinks)

        var amount = $("#myRange").val();
        console.log(amount);

    });

    document.addEventListener("DOMContentLoaded", function () {
        var elems = document.querySelectorAll(".carousel");
        var instances = M.Carousel.init(elems, options);
        instances.next();
    });

    function newCard(newCard) {
        // $(".addCard").append('<div class="col s6 m4"</div>');
        // $(".col s6 m4").append('<div class="card"</div>');
        // $(".card").append('<div class="card-image"</div>');
        // $(".card-image").append('<img src=' + newCard + '>');
        // $(".card-image").append('<span class="card-title gradient">"Titles Card"</span>');
        // $(".card").append('<div class="card-content"</div>');
        // $(".card-content").append('<strong>"Card Content"</strong>');
        console.log(newCard);
    }


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
        $(".addCard").append(card);
    }


    //   var outer = $("<div class=\"col s6 m4\"" + index + "></div>")
    //   var inner = $("<div class=\"card\"></div>")
    //   var imageContainer = $("<div class=\"card\"></div>")

function addCard() {
    $.get("api/cheap", function (data) {
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
            // console.log("AM I RUNNING");
        userLocation = response.location;
        initMap();

        });


        var initMap = function() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: userLocation, "accuracy": 50,
                zoom: 12
            });
            // console.log("AM I RUNNING");
            
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
                    createMarker(results[i]);
                }
            }
            x++;
            if(x < barNames.length){
                findplaces();
            }
        };

        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });

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
                var image = '../images/logo.png'
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
                    // infowindow.setContent(place.hours);
                    infowindow.open(map, this);
                });

                
            }
    
            
        });
    }

    // var map;
    // var service;
    // var infowindow;
    // var barNames = [data[i].name]
    // var userLocation;
    // var x = 0;

    // var queryUrl = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCVf591AZ-evHODFReCvcQ56eAJZecmLgc";

    // $.ajax({
    //     url: queryUrl,
    //     method: "POST",

    // }).then(function(response){
    //     console.log("AM I RUNNING");
    // userLocation = response.location;
    // initMap();

    // });


    // var initMap = function() {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: userLocation, "accuracy": 50,
    //         zoom: 12
    //     });
    //     console.log("AM I RUNNING");
        
    //     infowindow = new google.maps.InfoWindow();
    //     service = new google.maps.places.PlacesService(map);
    //     findplaces();
    // }

    // function findplaces(){
    //     service.findPlaceFromQuery({ 
    //         query: barNames[x],
    //         fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry']
    //     },callback);
    // }

    // function callback(results, status) {
    //     if (status == google.maps.places.PlacesServiceStatus.OK) {
    //         for (var i = 0; i < results.length; i++) {
    //             console.log(barNames[x] + " found");
    //             createMarker(results[i]);
    //         }
    //     }
    //     x++;
    //     if(x < barNames.length){
    //         findplaces();
    //     }
    // };

    // function createMarker(place) {
    //     var placeLoc = place.geometry.location;
    //     var marker = new google.maps.Marker({
    //         map: map,
    //         position: place.geometry.location
    //     });

    //     google.maps.event.addListener(marker, 'click', function() {
    //         infowindow = new google.maps.InfoWindow();
    //         console.log(infowindow);
    //         infowindow.setContent(place.name);
    //         // infowindow.setContent(place.hours);
    //         infowindow.open(map, this);
    //     });
    // }

    
});