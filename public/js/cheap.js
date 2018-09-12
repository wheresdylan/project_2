$(document).ready(function(){
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
        
  slider.oninput = function() {
    output.innerHTML = this.value;
  };

  $("button").on("click", function() {
  //$(AJAX call to api- for searching cheap drinks)

    var amount = $("#myRange").val();
    console.log (amount);

  }); 

  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, options);
    instances.next();
  });


});