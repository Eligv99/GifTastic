$(document).ready(function() {

    var list = []; 


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
            $("#buttons").prepend(a);
        }
    }
    
    updateHTML();

    $("#add-movie").on("click", function(event, input) {
        
        var input = document.getElementById("giphy-input").value;

        event.preventDefault();

        
        console.log("This is the search term: " + input);

        list.push(input);

        console.log("this is upated list " + list);

        
        
        // var input = document.getElementById("inputSearchTerm").text();

        // // var input = $("#inputSearchTerm").val();

        // list.push(input);

        updateHTML()

    });

    $("#buttons").on("click", ".gif", function() {

        $("#giphy").empty();
        
        var btn = $(this).attr("data-name");

        // alert(btn)

        console.log(btn);
        
        // Ajax method to use out giphy API    
        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ btn +"&api_key=dc6zaTOxFJmzC&limit=15";

        $.ajax({
        url: queryURL,
        method: "GET"
    
        }).then(function(response) {
    
            debugResponse = response;
    
            console.log(response);
    
            var lenght = response.data.length;
    
            console.log(lenght);
    
            for(i = 0; i < lenght; i++){
    
                console.log(i);

                var Rating = response.data[i].rating;

                $("#giphy").append("<div id='Gifo'><p>Rated: " + Rating.toUpperCase() + "<p/>" + 
                
                "<img class='gif' src='" + response.data[i].images.fixed_width_still.url + 

                "' data-still='" +  response.data[i].images.fixed_width_still.url +
                
                "' data-animate='" + response.data[i].images.fixed_width.url +
                
                "'data-state='still'" + "></div>");
                
            }
            
        });


    }); 
    

    $(this).on("click", ".gif", function()  {

       

        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");

        console.log(state);

        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

});