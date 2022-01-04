HideMsg(); //hide the msg

function reset()
{
    var email = document.getElementById("input-li-email").value;
    if (email != "")
    {
        var initiateENDPOINT = "https://aletheia.azurewebsites.net/InitiateAccountRecovery?email=" + email;
        var req = new XMLHttpRequest();
        req.open("get", initiateENDPOINT);
        req.onreadystatechange = function()
        {
            if (req.readyState == 4) //the response has been received
            {
                if (req.status == 200) //If successful, simply hide the button and post a message
                {
                    UpdateMsg("A message from tim@aletheiaapi.com has been sent to your email with steps on how to continue with resetting your password.")
                }
                else
                {
                    ShowBtn();
                    UpdateMsg("The attempt to begin the password recovery process failed with code " + req.status.toString() + ": " + req.responseText);
                }
            }
        }
    }

    //Send the request
    req.send();

    //But immediately after sending the request, hide the button
    HideBtn();
    UpdateMsg("Initiating password reset...");
}

//Subscribe to the event
document.getElementById("reset-button").addEventListener("click", reset);