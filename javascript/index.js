$(function() {

/*------------------------------------------Index.html-------------------------------------------------------------------------------------------------------------------*/

    $("#start-button").mouseenter(startEnter);
    $("#start-button").mouseleave(startExit);
    $("#start-button").click(startClick);
        
        function startEnter() {
            $("#start-button").css({"background-color": "#353BAE", "color": "white", "text-decoration": "underline", "box-shadow": "0px 5px 10px black"})
        };

        function startExit() {
            $("#start-button").css({"background-color": "#FFFFFF", "color": "black", "text-decoration": "none", "box-shadow": "0px 0px 0px"})  
        };

        function startClick() {
            window.location.href = "quiz.html";
        };


/*------------------------------------------Quiz.html-------------------------------------------------------------------------------------------------------------------*/
var gameScore = 0;
var questionNumber = 0;    
/*------------------------------------------Exit Lightbox Button-------------------------------------------------------------------------------------------------------------------*/
        $(".next1").on("click", function() {
             $(".answer-box1").fadeOut(1000);
        });        
/*------------------------------------------Choices A / B / C / D-------------------------------------------------------------------------------------------------------------------*/
        $(".correct1").on("click", function() {
                // Transitions Color
                $("#goToLocation").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text").fadeOut(4000, function(){
                    $("#transition-text").text('Welkom bij Brussels!').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box1").fadeIn(1000);
                $("#map").show();
                map.resize();
                map.flyTo({
                    center: [4.352414, 50.846732],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-1").attr("src", "images/checked.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-1-pulse").removeClass("question-pulse").addClass("pre-question-pulse");
                $("#circle-2-pulse").addClass("question-pulse");

                //Changing "answer-verdict text to CORRECT"
                $("#answer-verdict").text("Awesome! You're answer choice was correct!");
                $("#answer-verdict").css("color", "#007F0A");
        });

        $(".incorrect1").on("click", function() {
                // Transitions Color
                $("#goToLocation").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text").fadeOut(4000, function(){
                $("#transition-text").text('Welkom bij Brussels!').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box1").fadeIn(1000);
                $("#map").show();
                map.resize();
                map.flyTo({
                    center: [4.352414, 50.846732],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-1").attr("src", "images/cancel.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-1-pulse").removeClass("question-pulse").addClass("pre-question-pulse");
                $("#circle-2-pulse").addClass("question-pulse");

                //Changing "answer-verdict text to INCORRECT"
                $("#answer-verdict").text("Aww man, your choice was incorrect. :(");
                $("#answer-verdict").css("color", "#CC2107");
        });

/*------------------------------------------Map Box-------------------------------------------------------------------------------------------------------------------*/
        
    mapboxgl.accessToken = 'pk.eyJ1IjoicG1hdWxpb24iLCJhIjoiY2lza2c3dWhvMDRsbzJ6b2N4cnYwMG1jcyJ9.U3O1wyf6PiCUUPr3Ebr06g';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-73.990208, 40.739848],
        zoom: 16.5
        });

// Below is end of index.js
}); 