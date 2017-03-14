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
            // Hide answer box
             $(".answer-box1").fadeOut(1000);
             // Scroll to next Question
             $('html, body').animate({
                scrollTop: ($("#img-2").offset().top - 110)
                }, 1500);
        });

        $(".next2").on("click", function() {
            // Hide answer box
             $(".answer-box2").fadeOut(1000);
             // Scroll to next Question
             $('html, body').animate({
                scrollTop: ($("#img-3").offset().top - 110)
                }, 1500);
        });

        $(".next3").on("click", function() {
            // Hide answer box
             $(".answer-box3").fadeOut(1000);
             // Scroll to next Question
             $('html, body').animate({
                scrollTop: ($("#img-4").offset().top - 110)
                }, 1500);
        });

        $(".next4").on("click", function() {
            // Hide answer box
             $(".answer-box4").fadeOut(1000);
             // Scroll to next Question
             $('html, body').animate({
                scrollTop: ($("#img-5").offset().top - 110)
                }, 1500);
        });

        $(".next5").on("click", function() {
            // Hide answer box
             window.location.href = "end.html";
        });        
/*------------------------------------------Choices A / B / C / D-------------------------------------------------------------------------------------------------------------------*/
        // Question 1

        $(".correct1").on("click", function() {
                // Tracking Score
                gameScore = gameScore + 1;
                // Transitions Color
                $("#goToLocation1").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text1").fadeOut(4000, function(){
                $("#transition-text1").text('Welkom bij Brussels!').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box1").fadeIn(1000);
                $("#map1").show();
                map1.resize();
                map1.flyTo({
                    center: [4.352414, 50.846732],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-1").attr("src", "images/checked.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-1-pulse").removeClass("question-pulse").addClass("pre-question-pulse");
                $("#circle-2-pulse").addClass("question-pulse");

                // ANSWER VERDICT
                $("#answer-verdict1").text("Awesome! You're answer choice was correct!");
                $("#answer-verdict1").css("color", "#007F0A");
        });

        $(".incorrect1").on("click", function() {
                // Transitions Color
                $("#goToLocation1").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text1").fadeOut(4000, function(){
                $("#transition-text1").text('Welkom bij Brussels!').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box1").fadeIn(1000);
                $("#map1").show();
                map1.resize();
                map1.flyTo({
                    center: [4.352414, 50.846732],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-1").attr("src", "images/cancel.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-1-pulse").removeClass("question-pulse").addClass("pre-question-pulse");
                $("#circle-2-pulse").addClass("question-pulse");

                // ANSWER VERDICT
                $("#answer-verdict1").text("Aww man, your choice was incorrect. :(");
                $("#answer-verdict1").css("color", "#CC2107");
        });

        // Question 2

        $(".correct2").on("click", function() {
                // Tracking Score
                gameScore = gameScore + 1;
                // Transitions Color
                $("#goToLocation2").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text2").fadeOut(4000, function(){
                $("#transition-text2").text('Selamat datang ke Singapore').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box2").fadeIn(1000);
                $("#map2").show();
                map2.resize();
                map2.flyTo({
                    center: [103.8545, 1.286794],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-2").attr("src", "images/checked.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-2-pulse").removeClass("question-pulse").addClass("pre-question-pulse");
                $("#circle-3-pulse").addClass("question-pulse");

                // ANSWER VERDICT
                $("#answer-verdict2").text("Awesome! You're answer choice was correct!");
                $("#answer-verdict2").css("color", "#007F0A");
        });

        $(".incorrect2").on("click", function() {
                // Transitions Color
                $("#goToLocation2").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text2").fadeOut(4000, function(){
                $("#transition-text2").text('Selamat datang ke Singapore!').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box2").fadeIn(1000);
                $("#map2").show();
                map2.resize();
                map2.flyTo({
                    center: [103.8545, 1.286794],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-2").attr("src", "images/cancel.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-2-pulse").removeClass("question-pulse").addClass("pre-question-pulse");
                $("#circle-3-pulse").addClass("question-pulse");

                // ANSWER VERDICT
                $("#answer-verdict2").text("Aww man, your choice was incorrect. :(");
                $("#answer-verdict2").css("color", "#CC2107");
        });

        // Question 3

                $(".correct3").on("click", function() {
                // Tracking Score
                gameScore = gameScore + 1;
                // Transitions Color
                $("#goToLocation3").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text3").fadeOut(4000, function(){
                $("#transition-text3").text('!مرحبا بكم في دبي').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box3").fadeIn(1000);
                $("#map3").show();
                map3.resize();
                map3.flyTo({
                    center: [55.274363, 25.197253],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-3").attr("src", "images/checked.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-3-pulse").removeClass("question-pulse").addClass("pre-question-pulse");
                $("#circle-4-pulse").addClass("question-pulse");

                // ANSWER VERDICT
                $("#answer-verdict3").text("Awesome! You're answer choice was correct!");
                $("#answer-verdict3").css("color", "#007F0A");
        });

        $(".incorrect3").on("click", function() {
                // Transitions Color
                $("#goToLocation3").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text3").fadeOut(4000, function(){
                $("#transition-text3").text('!مرحبا بكم في دبي').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box3").fadeIn(1000);
                $("#map3").show();
                map3.resize();
                map3.flyTo({
                    center: [55.274363, 25.197253],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-3").attr("src", "images/cancel.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-3-pulse").removeClass("question-pulse").addClass("pre-question-pulse");
                $("#circle-4-pulse").addClass("question-pulse");

                // ANSWER VERDICT
                $("#answer-verdict3").text("Aww man, your choice was incorrect. :(");
                $("#answer-verdict3").css("color", "#CC2107");
        });

        // Question 4

                $(".correct4").on("click", function() {
                // Tracking Score
                gameScore = gameScore + 1;
                // Transitions Color
                $("#goToLocation4").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text4").fadeOut(4000, function(){
                $("#transition-text4").text('Willkomen in der Schweiz!').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box4").fadeIn(1000);
                $("#map4").show();
                map4.resize();
                map4.flyTo({
                    center: [8.542513, 47.369916],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-4").attr("src", "images/checked.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-4-pulse").removeClass("question-pulse").addClass("pre-question-pulse");
                $("#circle-5-pulse").addClass("question-pulse");

                // ANSWER VERDICT
                $("#answer-verdict4").text("Awesome! You're answer choice was correct!");
                $("#answer-verdict4").css("color", "#007F0A");
        });

        $(".incorrect4").on("click", function() {
                // Transitions Color
                $("#goToLocation4").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text4").fadeOut(4000, function(){
                $("#transition-text4").text('Willkomen in der Schweiz!').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box4").fadeIn(1000);
                $("#map4").show();
                map4.resize();
                map4.flyTo({
                    center: [8.542513, 47.369916],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-4").attr("src", "images/cancel.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-4-pulse").removeClass("question-pulse").addClass("pre-question-pulse");
                $("#circle-5-pulse").addClass("question-pulse");

                // ANSWER VERDICT
                $("#answer-verdict4").text("Aww man, your choice was incorrect. :(");
                $("#answer-verdict4").css("color", "#CC2107");
        });

        // Question 5

                $(".correct5").on("click", function() {
                // Tracking Score
                gameScore = gameScore + 1;
                // Transitions Color
                $("#goToLocation5").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text5").fadeOut(4000, function(){
                $("#transition-text5").text('Bem-vindo ao Rio de Janeiro!').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box5").fadeIn(1000);
                $("#map5").show();
                map5.resize();
                map5.flyTo({
                    center: [-43.188543, -22.906933],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-5").attr("src", "images/checked.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-5-pulse").removeClass("question-pulse").addClass("pre-question-pulse");

                // ANSWER VERDICT
                $("#answer-verdict5").text("Awesome! You're answer choice was correct!");
                $("#answer-verdict5").css("color", "#007F0A");
        });

        $(".incorrect5").on("click", function() {
                // Transitions Color
                $("#goToLocation5").animate({backgroundColor: "#353BAE", "opacity": .85, color: "white"}, 10000);
                
                // Transitinos text from "Travel to..." to "Correct Destination"
                $("#transition-text5").fadeOut(4000, function(){
                $("#transition-text5").text('Bem-vindo ao Rio de Janeiro!').fadeIn(4000);
                });

                // Showing the whole answer page as well as fly-to mapbox feature
                $(".answer-box5").fadeIn(1000);
                $("#map5").show();
                map5.resize();
                map5.flyTo({
                    center: [-43.188543, -22.906933],
                });   

                // Switches current question number img to either Correct or Incorrect PNG
                $("#circle-5").attr("src", "images/cancel.png");

                // Remove pulse effect and add pre-pulse effect AND add effect to the next
                $("#circle-5-pulse").removeClass("question-pulse").addClass("pre-question-pulse");

                // ANSWER VERDICT
                $("#answer-verdict5").text("Aww man, your choice was incorrect. :(");
                $("#answer-verdict5").css("color", "#CC2107");
        });
/*------------------------------------------Map Box-------------------------------------------------------------------------------------------------------------------*/
        
    mapboxgl.accessToken = 'pk.eyJ1IjoicG1hdWxpb24iLCJhIjoiY2lza2c3dWhvMDRsbzJ6b2N4cnYwMG1jcyJ9.U3O1wyf6PiCUUPr3Ebr06g';
    var map1 = new mapboxgl.Map({
        container: 'map1',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-73.990208, 40.739848],
        zoom: 16.5
        });

    mapboxgl.accessToken = 'pk.eyJ1IjoicG1hdWxpb24iLCJhIjoiY2lza2c3dWhvMDRsbzJ6b2N4cnYwMG1jcyJ9.U3O1wyf6PiCUUPr3Ebr06g';
    var map2 = new mapboxgl.Map({
        container: 'map2',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-73.990208, 40.739848],
        zoom: 16.5
        });

    mapboxgl.accessToken = 'pk.eyJ1IjoicG1hdWxpb24iLCJhIjoiY2lza2c3dWhvMDRsbzJ6b2N4cnYwMG1jcyJ9.U3O1wyf6PiCUUPr3Ebr06g';
    var map3 = new mapboxgl.Map({
        container: 'map3',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-73.990208, 40.739848],
        zoom: 15
        });

    mapboxgl.accessToken = 'pk.eyJ1IjoicG1hdWxpb24iLCJhIjoiY2lza2c3dWhvMDRsbzJ6b2N4cnYwMG1jcyJ9.U3O1wyf6PiCUUPr3Ebr06g';
    var map4 = new mapboxgl.Map({
        container: 'map4',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-73.990208, 40.739848],
        zoom: 15
        });

    mapboxgl.accessToken = 'pk.eyJ1IjoicG1hdWxpb24iLCJhIjoiY2lza2c3dWhvMDRsbzJ6b2N4cnYwMG1jcyJ9.U3O1wyf6PiCUUPr3Ebr06g';
    var map5 = new mapboxgl.Map({
        container: 'map5',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-73.990208, 40.739848],
        zoom: 12
        });
// Below is end of index.js
}); 