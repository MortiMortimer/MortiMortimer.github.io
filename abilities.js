$(document).ready(function() {
    $("#ism").css({"opacity": "0", "display": "none"});
    $(".ismtrig").hover(function() {
        $("#ism").css({"opacity": "1", "display": "inline"});
    }, function() {
        $("#ism").css({"opacity": "0", "display": "none"});
    });
});

$(document).ready(function() {
    $("#iss").css({"opacity": "0", "display": "none"});
    $(".isstrig").hover(function() {
        $("#iss").css({"opacity": "1", "display": "inline"});
    }, function() {
        $("#iss").css({"opacity": "0", "display": "none"});
    });
});
