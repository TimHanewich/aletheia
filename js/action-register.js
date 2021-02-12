//Clear the error message
$("#registration-error-msg").css("display", "none");


$("#register-button").click(function()
{
    //Get the values
    var ip_username = document.getElementById("input-username").value;
    var ip_email = document.getElementById("input-email").value;
    var ip_password = document.getElementById("input-password").value;
    var ip_password2 = document.getElementById("input-password2").value;

    var abort = false;

    //Check they all have values
    if (ip_username == "")
    {
        abort = true;
        MarkBad("input-username")
    }
    else
    {
        RemoveMarkBad("input-username");
    }
    if (ip_email == "")
    {
        abort = true;
        MarkBad("input-email");
    }
    else
    {
        RemoveMarkBad("input-email");
    }
    if (ip_password == "")
    {
        abort = true;
        MarkBad("input-password");
    }
    else
    {
        RemoveMarkBad("input-password");
    }
    if (ip_password2 == "")
    {
        abort = true;
        MarkBad("input-password2");
    }
    else
    {
        RemoveMarkBad("input-password2");
    }
    if (abort)
    {
        return;
    }

    //Check if the email has an @ symbol in it
    if (ip_email.includes("@") == false)
    {
        MarkBad("input-email");
        abort = true;
    }
    else
    {
        RemoveMarkBad("input-email");
    }
    if (abort)
    {
        return;
    }
    
    //Check that password1 = password2
    if (ip_password != ip_password2)
    {
        MarkBad("input-password");
        MarkBad("input-password2");
        abort = true;
    }
    
    
    //Abort if abort
    if (abort)
    {
        return;
    }
    
    


    //////READY TO TRY TO CALL!
    
    //Disable
    DisableTextInput("input-username");
    DisableTextInput("input-email");
    DisableTextInput("input-password");
    DisableTextInput("input-password2");
    DisableButton("register-button");

    var url = "https://aletheia.azurewebsites.net/api/RegisterAccount?";
    var payload = {"username": ip_username, "email": ip_email, "password": ip_password}
    var req = new XMLHttpRequest();
    req.open("post", url);
    req.onreadystatechange = function()
    {
        if (req.readyState == 4)
        {
            if (req.status == 200)
            {
                //Store it as a cookie
                document.cookie = "aletheiauser=" + ip_username;

                //Now just need to navigate to the user account page once I make that.
            }
            else
            {
                //Enable all
                EnableTextInput("input-username");
                EnableTextInput("input-email");
                EnableTextInput("input-password");
                EnableTextInput("input-password2");
                EnableButton("register-button");                

                FlashErrorMsg(req.responseText);
            }
        }
    }
    req.send(JSON.stringify(payload));
    
});

function MarkBad(ele_name)
{
    document.getElementById(ele_name).classList.add("red-border");
}

function RemoveMarkBad(ele_name)
{
    document.getElementById(ele_name).classList.remove("red-border");
}

function DisableTextInput(ele_name)
{
    document.getElementById(ele_name).classList.add("disabled-txt-input");
}

function EnableTextInput(ele_name)
{
    document.getElementById(ele_name).classList.remove("disabled-txt-input");
}

function DisableButton(ele_name)
{
    document.getElementById(ele_name).setAttribute("disabled", "");
}

function EnableButton(ele_name)
{
    document.getElementById(ele_name).removeAttribute("disabled");
}

function FlashErrorMsg(error_msg)
{
    document.getElementById("registration-error-msg").innerText = error_msg;
    $("#registration-error-msg").fadeIn(500, function()
    {
        setTimeout(function()
        {
            $("#registration-error-msg").fadeOut(500)
        }, 3000); 
    });
}