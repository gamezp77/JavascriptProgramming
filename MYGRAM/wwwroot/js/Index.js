var divContainer = $("#MainContainer");
var dataTable = null;
$("<span></span>").text("My Gram").css("margin-right", "10px").appendTo(divContainer);
$("<button></button>").attr("id", "LogIn").text("Log In").appendTo(divContainer);
$("<button></button>").attr("id", "SignUp").text("Sign Up").appendTo(divContainer);
$("<br>").appendTo(divContainer);
$("<br>").appendTo(divContainer);
var imageContainer = $("<div></div>").attr("id", "ImageContainer").appendTo(divContainer);
var table = $("<table></table>").appendTo(imageContainer);
$("<thead><th></th><th></th><th></th><th></th><th></th></thead>").appendTo(table);
var tbody = $("<tbody></tbody>").attr("id", "ImageBodyContainer").appendTo(table);
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
            PasswordInput: { required: true }
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
                    if (data != null && data.registerMessage != "") {
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

    $.when($.ajax({
        url: "Home/GetAllImages",
        method: "GET"
    })).then(function (data) {
        var image = null;
        var counter = 0;
        var rows = [];
        var row = [];

       
        for (var element in data) {
            if (counter == 5) {
                rows.push(row);
                row = [];
                counter = 0;
            }
            image = data[element];

            row.push($("<span class='AddIcons'></span>").text(image.imageAlt)
                .css("margin-right", "10px").attr("data-image", JSON.stringify(image)).prop("outerHTML"));
            
            counter++;
        }

        rows.push(row);
        
        $(table).DataTable({ data: rows});
     });
});
$(table).on("click", ".AddIcons", function () {
    var selectedImage = $(this).data("image");

    $.toast({
        heading: 'Success',
        text: " you liked the image",
        loader: true,
        loaderBg: "red",
        icon: "success"

    });
});
   