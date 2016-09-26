$("document").ready(function(){

  var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ].reverse(); 


  $.each(planets, function(key, value){
      $("#planetSelected").append($("<option> </option").val(value[1]).text(value[0]));

   });

  $("button").click(function(){
    var userSelectedGravity =$("#planetSelected :selected").val();
    var planetAstroLanded=$("#planetSelected :selected").html();
    var astroWeightInput = $("#userWeight").val();
    var buttonResult= astroWeightInput * userSelectedGravity;
    $("#userOutput").html("If you were on " + planetAstroLanded+ ", you would weight " + buttonResult + " lbs!");
  });
});