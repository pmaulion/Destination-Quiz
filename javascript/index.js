$(function() {

/*------------------------------------------Index.html-------------------------------------------------------------------------------------------------------------------*/

    $("#start-button").mouseenter(startEnter);
    $("#start-button").mouseleave(startExit);
    $("#start-button").click(startClick);
        
        function startEnter() {
            $("#start-button").css({"background-color": "#353BAE", "color": "white", "text-decoration": "underline", "box-shadow": "0px 5px 5px black"})
        };

        function startExit() {
            $("#start-button").css({"background-color": "#FFFFFF", "color": "black", "text-decoration": "none", "box-shadow": "0px 0px 0px"})  
        };

        function startClick() {
            window.location.href = "quiz.html";
        };

/*------------------------------------------Choices A / B / C / D-------------------------------------------------------------------------------------------------------------------*/
    

    $(".answerChoice").click(answer);
        function answer() {
            // Transitions Color
            $("#goToLocation").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
            
            // Transitinos text from "Travel to..." to "Correct Destination"
            $("#transition-text").fadeOut(4000, function(){
                $("#transition-text").text('Welkom bij Brussels!').fadeIn(4000);
            });

            // Showing the whole answer page as well as fly-to mapbox feature
            $(".answer-box").fadeIn(1000);
            $("#map").show();
            map.resize();
            map.flyTo({
                center: [4.352414, 50.846732],
            });   
        };

    $(".next").click(function() {
        $(".answer-box").hide();
        });

/*------------------------------------------Quiz.html-------------------------------------------------------------------------------------------------------------------*/
    
    var gameScore = 0;
   
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