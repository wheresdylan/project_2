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
        $(".addCardTwo").append(card);
    }


    //   var outer = $("<div class=\"col s6 m4\"" + index + "></div>")
    //   var inner = $("<div class=\"card\"></div>")
    //   var imageContainer = $("<div class=\"card\"></div>")

    function addCard() {
        $.get("api/unique", function (data) {


              for (var i = 0; i < data.length; i++){

                makeCard(i, data[i].image, data[i].name);
    
              }
        });
    }

});