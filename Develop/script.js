


$("#9amBtn").on("click", function(){
    var text = $("#text9am").val();
    localStorage.setItem("9am", text);
    console.log(text);
});
