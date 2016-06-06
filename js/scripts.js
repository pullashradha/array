$(document).ready(function() {
  $("form#content").submit(function(event) {
    var favThings = ["fav1","fav2","fav3","fav4","fav5"];

    favThings.forEach(function(favThing) {
      var userInput = $("input#" + favThing).val();
      $("#" + favThing + "result").text(userInput);
    });
    var newFav = [favThings[1], favThings[0], favThings[2]];

    var newThing = favThings[0,1,2,3,4] += newFav[0,1,2];
    alert(newThing);

    $("#results").show();
    event.preventDefault();
  });
});
