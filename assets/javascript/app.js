$(document).ready(function() {

    var list =["Bunny", "Happy"]; 

    console.log(list)
    
    var userInput = "Mario";

    // Ajax method to use out giphy API    
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ userInput +"&api_key=dc6zaTOxFJmzC&limit=10";

    console.log(queryURL);

    $.ajax({
    url: queryURL,
    method: "GET"

    }).then(function(response) {

        debugResponse = response;

        console.log(response);

        console.log(response.data.length);

        // for(i = 0; i > response.data.length; i++){

            // console.log(i);

            $("#giphy").push("<p>Rating: " + response.data[1].rating+"<p/>");
            
            $("#giphy").append("<img src='" + response.data[1].images.fixed_height_small.url + "'>");

            $("#giphy").push("<p>Rating: " + response.data[2].rating+"<p/> <br>");
            
            $("#giphy").append("<img src='" + response.data[2].images.fixed_height_small.url + "'>");

            // console.log(response.data[0].images.downsized.url);
        // }


    });

    function updateHTML(){

        $("#buttons").empty();
        
        
        for (var i = 0; i < list.length; i++) {
            
            var a = $("<button>");

            // Adding a class
            a.addClass("gif");
            // Adding a data-attribute with a value of the movie at index i
            a.attr("data-name", list[i]);
            // Providing the button's text with a value of the movie at index i
            a.text(list[i]);
            // Adding the button to the HTML
            $("#buttons").append(a);
        }
    }

    $("#add-search").on("click", function(event) {

        event.preventDefault();
        
        var input = $("#inputSearchTerm").val();

        updateHTML();


        
    });

});

// function createButtonsFromArray() {
//     $("#otherButtonsHere").empty();
//     buttonArray.forEach(function(item) {
//       createGifButton(item);
//     });
// }












// var input = ($("#bar").val() === undefined) ? " " : $("#bar").val();


// // var input = "testing";

// console.log(input)

// // Ajax method to use out giphy API    
// var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + input + "&api_key=dc6zaTOxFJmzC&limit=10";

// console.log(queryURL);

// $.ajax({
// url: queryURL,
// method: "GET"

// }).then(function(response) {

//     debugResponse = response;
//     console.log(response);

//     for(i = 0; i < response.data.lenght; i++){

//         $("#giphy").append("<p>Rating: " + response.data[i].rating+"<p/>");
        
//         $("#giphy").append("<img src='" + response.data[i].images.downsized.url + "'>");

//         console.log(response.data[i])
//     
