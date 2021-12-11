//fuction that loads schedule
var loadSchedulle =function(){
    var info = localStorage.getItem("9am");
    console.log('dentro de funcion ' + info);
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
};

$("#9amBtn").on("click", function(){
    var text = $("#text9am").val();
    localStorage.setItem("9am", text);
    console.log(text);
});


$("#10amBtn").on("click", function(){
    var text = $("#text10am").val();
    localStorage.setItem("10am", text);
    console.log(text);
});

$("#11amBtn").on("click", function(){
    var text = $("#text11am").val();
    localStorage.setItem("11am", text);
    console.log(text);
});

$("#12pmBtn").on("click", function(){
    var text = $("#text12pm").val();
    localStorage.setItem("12pm", text);
    console.log(text);
});
$("#1pmBtn").on("click", function(){
    var text = $("#text1pm").val();
    localStorage.setItem("1pm", text);
    console.log(text);
});

$("#2pmBtn").on("click", function(){
    var text = $("#text2pm").val();
    localStorage.setItem("2pm", text);
    console.log(text);
});

$("#2pmBtn").on("click", function(){
    var text = $("#text2pm").val();
    localStorage.setItem("2pm", text);
    console.log(text);
});

$("#3pmBtn").on("click", function(){
    var text = $("#text3pm").val();
    localStorage.setItem("3pm", text);
    console.log(text);
});

$("#4pmBtn").on("click", function(){
    var text = $("#text4pm").val();
    localStorage.setItem("4pm", text);
    console.log(text);
});


$("#5pmBtn").on("click", function(){
    var text = $("#text5pm").val();
    localStorage.setItem("5pm", text);
    console.log(text);
});

 loadSchedulle();