// get a list of places based on cuisine keywords
function getPlaces(type) {
  var queryUrl = "https://maps.googleapis.com/maps/api/place/details/json?type=restaurant&keyword=" + type + "&key=AIzaSyAyJ9StHU9kwMRBGiBeCgdPaCbQtdAe9Wo";


    $.ajax ({
        url: queryUrl,
        method: "GET"
    }).done(function(result) {
        console.log(result);
        
        //var name = response.;
        var rating;
        var hours;
    });
}

console.log("start");
getPlaces("mexican");