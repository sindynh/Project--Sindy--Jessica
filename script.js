$(".sadcat").hide();
$(".tiredcat").hide();
$(".festivecat").hide();
$(".happycat").hide();

//If user chooses sad

let input2 = "sad";

$(".submit-button").click(function() {
    let input2input = $(".input2").val();
    if (input2input === "sad") {
        $(".sadcat").show();
        $(".reply").text("you are an emo cat");
        $(".happycat").hide();
        $(".festivecat").hide();
        $(".tiredcat").hide();
    }
    // If user chooses tired

    if (input2input === "tired") {
        $(".tiredcat").show();
        $(".reply").text("awhhh here's a tired cat for you");
        $(".sadcat").hide();
        $(".festivecat").hide();
        $(".happycat").hide();
    }
    // If user chooses festive

    if (input2input === "festive") {
        $(".festivecat").show();
        $(".reply").text("tis the season");
        $(".sadcat").hide();
        $(".happycat").hide();
        $(".tiredcat").hide();
        
    }
    // If user chooses happy

    if (input2input === "happy") {
        $(".happycat").show();
        $(".reply").text("happy cat for you");
        $(".sadcat").hide();
        $(".festivecat").hide();
        $(".tiredcat").hide();
    }

});