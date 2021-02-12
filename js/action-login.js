$("#login-error-msg").css("display", "none");

$("#login-button").click(function()
{
    //Get the inputs
    var ip_username = document.getElementById("input-li-username").value;
    var ip_password = document.getElementById("input-li-password").value;

    //Check that all data is filled out
    var abort = false;
    if (ip_username == "")
    {
        abort = true;
        MarkBad("input-li-username");
    }
    else
    {
        RemoveMarkBad("input-li-username");
    }
    if (ip_password == "")
    {
        abort = true;
        MarkBad("input-li-password");
    }
    else
    {
        RemoveMarkBad("input-li-password");
    }
    if (abort)
    {
        return;
    }


    //Disable all
    DisableTextInput("input-li-username");
    DisableTextInput("input-li-password");
    DisableButton("login-button");

    //Make the call
    var url = "https://aletheia.azurewebsites.net/api/LoginAccount?username=" + ip_username + "&password=" + ip_password;
    var req = new XMLHttpRequest();
    req.open("get", url);
    req.onreadystatechange = function()
    {
        if (req.readyState == 4)
        {
            if (req.status == 200)
            {
                //Store the username as a cookie
                document.cookie = "aletheiauser=" + ip_username;

                //Now navigate to the user account page
            }
            else
            {
                //Enable it all
                EnableTextInput("input-li-username");
                EnableTextInput("input-li-password");
                EnableButton("login-button");

                FlashErrorMsg("login-error-msg", req.responseText);
            }
        }
    };
    req.send();


});