// $(document).ready(function(){
//   $(".fixed-action-btn").floatingActionButton();
// });

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "top",
    hoverEnabled: false
  });
});instance.open();
