$(document).ready(function() {
  $("form#content").submit(function(event) {
    var firstFav = $("input#fav1").val();
    var secondFav = $("input#fav2").val();
    var thirdFav = $("input#fav3").val();

    var favThings = [firstFav, secondFav, thirdFav];
      alert(favThings);

  event.preventDefault();

 });
});
