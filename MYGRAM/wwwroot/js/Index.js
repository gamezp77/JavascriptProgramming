var divContainer = $("#MainContainer");
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

$("#FormContainer").hide();

$(document).ready(function () {
    $('form[name="registration"]').validate({
        rules: {
            UserInput: { required: true },
            PasswordInput: {required:true}
        },
        messages: {
            UserInput: "User is required",
            PasswordInput: "Password is required"
        },
        submitHandler: function (form) {
            //form.submit();

            var userValue = $("#UserInput").val();
            var passwordValue = $("#PasswordInput").val();

            $.when($.ajax({
                url: "Home/Register",
                type: "POST",
                data: {
                    UserInput: userValue,
                    PasswordInput: passwordValue
                },
                datatype: "json"
            })).then(function (data) {
                if (data != null && data.registerMessage!="") {
                alert(data.registerMessage);
                }
            });
        }
    });
});




