$(document).ready(function() {
  $("form#content").submit(function(event) {
   var favThings=["fav1","fav2","fav3"];
   favThings.forEach(function(favThing){
     var userinput=$("input#"+favThing).val();
     $("#"+favThing).text(userinput);

    });

    $("#results").show();
    event.preventDefault();

 });
});
