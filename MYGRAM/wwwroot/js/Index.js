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
    $("#Dialog").dialog("open");  
});

$("<br>").appendTo(divContainer);
$("<br>").appendTo(divContainer);

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

       

            $("#FormDialog").dialog('open');

            
        }
    });

    $("#Dialog").dialog({
        autoOpen: false,
        modal: true
    });

    $("#FormDialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            OK: function () {
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
                    $.toast({
                        heading: "Sucess",
                        text: data.registerMessage,
                        icon: "sucess",
                        loader: true,
                        loaderBg: "blue",
                        position: "bottom-right",
                        stack: 3
                    });
                }
                $("#FormDialog").dialog('close');
            });
            },
            Cancel: function () {
                $("#FormDialog").dialog('close');

            }

            }
        });
});




