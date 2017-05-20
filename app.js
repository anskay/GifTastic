 $("button").on("click", function() {
      var food = $(this).attr("data-food");

      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        food + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          console.log(queryURL);
          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;
          // Looping through each result item
          for (var i = 0; i < results.length; i++) {
            var foodDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var foodImage = $("<img>");
            foodImage.attr("data-state", "still");            
            foodImage.attr("src", results[i].images.fixed_height.url);
            foodImage.attr("data-still", results[i].images.fixed_height_still.url);
            foodImage.attr("data-animate", results[i].images.fixed_height_downsampled.url);


            foodDiv.append(p);
            foodDiv.append(foodImage);


            $("#gifs-appear-here").prepend(foodDiv);
          }
        });



});
//create and append buttons
       $("#addmore").on("click", function(event) {
      event.preventDefault();

      var addMoreButtons = $("#more").val().trim();
      var buttonItem = $("<button>");

      buttonItem.attr("class", "btn btn-warning");
      buttonItem.attr("data-food", addMoreButtons);      
      buttonItem.append(addMoreButtons);

      $("#addedbuttons").append(buttonItem);
      $("#more").val("");
 
    


//button click function, ajax calls
 $("button").on("click", function() {
      var food = $(this).attr("data-food");

      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        food + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          console.log(queryURL);
          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;
          // Looping through each result item
          for (var i = 0; i < results.length; i++) {
            var foodDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var foodImage = $("<img>");
            foodImage.attr("data-state", "still");            
            foodImage.attr("src", results[i].images.fixed_height.url);
            foodImage.attr("data-still", results[i].images.fixed_height_still.url);
            foodImage.attr("data-animate", results[i].images.fixed_height_downsampled.url);


            foodDiv.append(p);
            foodDiv.append(foodImage);


            $("#gifs-appear-here").prepend(foodDiv);

    

          }
        });

    $(document).on("click","img", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $("img").attr("data-state");
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

    });



