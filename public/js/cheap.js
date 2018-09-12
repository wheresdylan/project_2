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

              for (var i = 0; i < data.length; i++){

                makeCard(i, data[i].image, data[i].name);
    
              }
        });
    }


});