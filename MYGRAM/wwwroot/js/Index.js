﻿var divContainer = $("#MainContainer");
$("<span></span>").text("My Gram").css("margin-right", "10px").appendTo(divContainer);
$("<button></button>").attr("id","LogIn").text("Log In").appendTo(divContainer);
$("<button></button>").attr("id","SignUp").text("Sign Up").appendTo(divContainer);
$("<br>").appendTo(divContainer);
$("<br>").appendTo(divContainer);
$("<span></span>").text("Image 1").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 2").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 3").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 4").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 5").css("margin-right", "10px").appendTo(divContainer);
$("<br>").appendTo(divContainer);
$("<br>").appendTo(divContainer);
$("<span></span>").text("About").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Blog").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Jobs").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Help").css("margin-right", "10px").appendTo(divContainer);
$("<br>").appendTo(divContainer);
$("<span></span>").text("English").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("2021").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("MyGram").css("margin-right", "10px").appendTo(divContainer);

$("#LogIn").click(function () {
    alert("You haved logged in");
});

$("#SignUp").click(function () {
$("#FormContainer").show();  
});
$("<br>").appendTo(divContainer);
$("<br>").appendTo(divContainer);

$("#ResgisterButton").click(function () {
    var userValue = $("#UserInput").val();
    var passwordValue = $("#PasswordInput").val();

    alert("The user is: " + userValue + ", and the password is: " + passwordValue);
});
$("#FormContainer").hide();






