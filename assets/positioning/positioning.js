const ELITE_DIST = 290.5
const ELITE_LONG_DIST = 310.5

let currentWepType = 0

$(document).ready(function() {
    $("#basic").css({"opacity": "1", "display": "inline"});
      $(".basictrig").hover(function() {
        $("#basic").css({"opacity": "1", "display": "inline"});
        $("#aggro").css({"opacity": "0", "display": "none"});
        $("#sub").css({"opacity": "0", "display": "none"});
        $("#spec").css({"opacity": "0", "display": "none"});
        });


  $("#aggro").css({"opacity": "0", "display": "none"});
    $(".aggtrig").hover(function() {
        $("#aggro").css({"opacity": "1", "display": "inline"});
        $("#basic").css({"opacity": "0", "display": "none"});
        $("#sub").css({"opacity": "0", "display": "none"});
        $("#spec").css({"opacity": "0", "display": "none"});
    }, function() {
    });


    $("#sub").css({"opacity": "0", "display": "none"});
    $(".subtrig").hover(function() {
        $("#sub").css({"opacity": "1", "display": "inline"});
        $("#aggro").css({"opacity": "0", "display": "none"});
        $("#basic").css({"opacity": "0", "display": "none"});
        $("#spec").css({"opacity": "0", "display": "none"});
        });


    $("#spec").css({"opacity": "0", "display": "none"});
    $(".spectrig").hover(function() {
        $("#spec").css({"opacity": "1", "display": "inline"});
        $("#aggro").css({"opacity": "0", "display": "none"});
        $("#sub").css({"opacity": "0", "display": "none"});
        $("#basic").css({"opacity": "0", "display": "none"});
        });


  document.getElementById("weptrig").onclick = function() {changeWepType()}


  function changeWepType() {
      document.getElementById("weptrig").innerHTML = "Scoped E-Liter";
        };


});
