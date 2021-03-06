/////// GLOBAL VARIABLES //////

var reg_username = "";
var reg_email = "";
var reg_password = "";

///////////////////////////////

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
    
    
    //// We are ready to initiate the email verification process


    //Disable all
    //Disable
    DisableTextInput("input-username");
    DisableTextInput("input-email");
    DisableTextInput("input-password");
    DisableTextInput("input-password2");
    DisableButton("register-button");

    var ev_url = "https://aletheia.azurewebsites.net/InitiateEmailVerification?email=" + ip_email;
    var evi_req = new XMLHttpRequest();
    evi_req.open("get", ev_url);
    evi_req.onreadystatechange = function()
    { 
        if (evi_req.readyState == 4)
        {
            if (evi_req.status == 201)
            {
                //It worked! The verification email was sent

                //Save the inputs to the registration variables
                reg_username = ip_username;
                reg_email = ip_email;
                reg_password = ip_password;

                //Before navigating to that pane, fill in their email in the span
                document.getElementById("your-email-we-verify").innerText = ip_email;

                //Navigate to the verification pane
                NavigateTo_VerifyEmail();
            }
            else
            {
                //Enable all
                EnableTextInput("input-username");
                EnableTextInput("input-email");
                EnableTextInput("input-password");
                EnableTextInput("input-password2");
                EnableButton("register-button");                

                FlashErrorMsg("registration-error-msg", evi_req.responseText);
            }
        }
    };
    evi_req.send();    
});

$("#verify-email-button").click(function()
{
    //In this method we attempt to send the registration command to the server.
    //If it bounces back positive, we navigate to the my account screen
    //If it comes back failed, we show the message.

    //Get the verification id
    var ip_verifcode = document.getElementById("email-verif-code").value;
    if (ip_verifcode == null || ip_verifcode == "") //Stop and show an error red mark if it is blank
    {
        MarkBad("email-verif-code");
        return;
    }
    else
    {
        RemoveMarkBad("email-verif-code");
    }


    //We are ready to make the call now, so disable the controls
    DisableTextInput("email-verif-code");
    DisableButton("verify-email-button");


    var url = "https://aletheia.azurewebsites.net/RegisterAccount?";
    var payload = {"verification": ip_verifcode, "username": reg_username, "email": reg_email, "password": reg_password}
    var req = new XMLHttpRequest();
    req.open("post", url);
    req.onreadystatechange = function()
    {
        if (req.readyState == 4)
        {
            if (req.status == 201) //201 is the 'creation' response. This is what the registration endpoint returns if successful as of 3/6/2021
            {
                //Get the response object
                var account_obj = JSON.parse(req.responseText);
                StoreAccountToCookie(account_obj);

                //Now navigate to the user account page
                window.location.href = "../myaccount/index.html";
            }
            else
            {
                //Enable all
                EnableTextInput("email-verif-code");
                EnableButton("verify-email-button");               

                FlashErrorMsg("verify-email-error-msg", req.responseText);
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

function FlashErrorMsg(err_txt_id, error_msg)
{
    document.getElementById(err_txt_id).innerText = error_msg;
    $("#" + err_txt_id).fadeIn(500, function()
    {
        setTimeout(function()
        {
            $("#" + err_txt_id).fadeOut(500)
        }, 3000); 
    });
}