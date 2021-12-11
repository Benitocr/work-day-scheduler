//fuction that loads schedule
var loadSchedulle =function(){
    var date = moment().format('llll');
    console.log(date)
    $("#currentDay").text(date);
    var info = localStorage.getItem("9am");
    $("#text9am").val(info);
    info = localStorage.getItem("10am");
    $("#text10am").val(info);
    info = localStorage.getItem("11am");
    $("#text11am").val(info);
    info = localStorage.getItem("12am");
    $("#text12am").val(info);
    info = localStorage.getItem("1pm");
    $("#text1pm").val(info);
    info = localStorage.getItem("2pm");
    $("#text2pm").val(info);
    info = localStorage.getItem("3pm");
    $("#text3pm").val(info);
    info = localStorage.getItem("4pm");
    $("#text4pm").val(info);
    info = localStorage.getItem("5pm");
    $("#text5pm").val(info);
    asignColor();
}

var asignColor = function(){
    console.log("in color fuction");
    var info = moment().hour();  
   
    console.log("hora del dia " + info);
    if(info<09){
        $("#text9am").toggleClass("future");
        $("#text10am").toggleClass("future");
        $("#text11am").toggleClass("future");
        $("#text12pm").toggleClass("future");
        $("#text1pm").toggleClass("future");
        $("#text2pm").toggleClass("future");
        $("#text3pm").toggleClass("future");
        $("#text4pm").toggleClass("future");
        $("#text5pm").toggleClass("future");

    } else if (info>17) {
        $("#text9am").toggleClass("past");
        $("#text10am").toggleClass("past");
        $("#text11am").toggleClass("past");
        $("#text12pm").toggleClass("past");
        $("#text1pm").toggleClass("past");
        $("#text2pm").toggleClass("past");
        $("#text3pm").toggleClass("past");
        $("#text4pm").toggleClass("past");
        $("#text5pm").toggleClass("past");
        
    } else{
        switch(info){
            case 09:
                $("#text9am").toggleClass("present");
                $("#text10am").toggleClass("future");
                $("#text11am").toggleClass("future");
                $("#text12pm").toggleClass("future");
                $("#text1pm").toggleClass("future");
                $("#text2pm").toggleClass("future");
                $("#text3pm").toggleClass("future");
                $("#text4pm").toggleClass("future");
                $("#text5pm").toggleClass("future");
            break;
            case 10:
                $("#text9am").toggleClass("past");
                $("#text10am").toggleClass("present");
                $("#text11am").toggleClass("future");
                $("#text12pm").toggleClass("future");
                $("#text1pm").toggleClass("future");
                $("#text2pm").toggleClass("future");
                $("#text3pm").toggleClass("future");
                $("#text4pm").toggleClass("future");
                $("#text5pm").toggleClass("future");
            break;
            case 11:
                $("#text9am").toggleClass("past");
                $("#text10am").toggleClass("past");
                $("#text11am").toggleClass("present");
                $("#text12pm").toggleClass("future");
                $("#text1pm").toggleClass("future");
                $("#text2pm").toggleClass("future");
                $("#text3pm").toggleClass("future");
                $("#text4pm").toggleClass("future");
                $("#text5pm").toggleClass("future");
            break;
            case 12:
                $("#text9am").toggleClass("past");
                $("#text10am").toggleClass("past");
                $("#text11am").toggleClass("past");
                $("#text12pm").toggleClass("present");
                $("#text1pm").toggleClass("future");
                $("#text2pm").toggleClass("future");
                $("#text3pm").toggleClass("future");
                $("#text4pm").toggleClass("future");
                $("#text5pm").toggleClass("future");
                break;
            case 13:
                $("#text9am").toggleClass("past");
                $("#text10am").toggleClass("past");
                $("#text11am").toggleClass("past");
                $("#text12pm").toggleClass("past");
                $("#text1pm").toggleClass("present");
                $("#text2pm").toggleClass("future");
                $("#text3pm").toggleClass("future");
                $("#text4pm").toggleClass("future");
                $("#text5pm").toggleClass("future");
                break;
            case 14:
                $("#text9am").toggleClass("past");
                $("#text10am").toggleClass("past");
                $("#text11am").toggleClass("past");
                $("#text12pm").toggleClass("past");
                $("#text1pm").toggleClass("past");
                $("#text2pm").toggleClass("present");
                $("#text3pm").toggleClass("future");
                $("#text4pm").toggleClass("future");
                $("#text5pm").toggleClass("future");
                break;
            case 15:
                $("#text9am").toggleClass("past");
                $("#text10am").toggleClass("past");
                $("#text11am").toggleClass("past");
                $("#text12pm").toggleClass("past");
                $("#text1pm").toggleClass("past");
                $("#text2pm").toggleClass("past");
                $("#text3pm").toggleClass("present");
                $("#text4pm").toggleClass("future");
                $("#text5pm").toggleClass("future");
                break;
            case 16:
                $("#text9am").toggleClass("past");
                $("#text10am").toggleClass("past");
                $("#text11am").toggleClass("past");
                $("#text12pm").toggleClass("past");
                $("#text1pm").toggleClass("past");
                $("#text2pm").toggleClass("past");
                $("#text3pm").toggleClass("past");
                $("#text4pm").toggleClass("present");
                $("#text5pm").toggleClass("future");
                break;
            case 17:
                $("#text9am").toggleClass("past");
                $("#text10am").toggleClass("past");
                $("#text11am").toggleClass("past");
                $("#text12pm").toggleClass("past");
                $("#text1pm").toggleClass("past");
                $("#text2pm").toggleClass("past");
                $("#text3pm").toggleClass("past");
                $("#text4pm").toggleClass("past");
                $("#text5pm").toggleClass("present");
                break;
        }

    }


        
    
}

//events that save the textbox in localstorage.
$("#9amBtn").on("click", function(){
    var text = $("#text9am").val();
    localStorage.setItem("9am", text);
    asignColor();
});


$("#10amBtn").on("click", function(){
    var text = $("#text10am").val();
    localStorage.setItem("10am", text);
    asignColor();
});

$("#11amBtn").on("click", function(){
    var text = $("#text11am").val();
    localStorage.setItem("11am", text);
    asignColor();
});

$("#12pmBtn").on("click", function(){
    var text = $("#text12pm").val();
    localStorage.setItem("12pm", text);
    asignColor();
});
$("#1pmBtn").on("click", function(){
    var text = $("#text1pm").val();
    localStorage.setItem("1pm", text);
    asignColor();
});

$("#2pmBtn").on("click", function(){
    var text = $("#text2pm").val();
    localStorage.setItem("2pm", text);
    asignColor();
});

$("#2pmBtn").on("click", function(){
    var text = $("#text2pm").val();
    localStorage.setItem("2pm", text);
    asignColor();
});

$("#3pmBtn").on("click", function(){
    var text = $("#text3pm").val();
    localStorage.setItem("3pm", text);
    asignColor();
});

$("#4pmBtn").on("click", function(){
    var text = $("#text4pm").val();
    localStorage.setItem("4pm", text);
    asignColor();
});


$("#5pmBtn").on("click", function(){
    var text = $("#text5pm").val();
    localStorage.setItem("5pm", text);
    asignColor();
});

 loadSchedulle();