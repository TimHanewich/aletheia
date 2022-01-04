//Get the parameters
var url = window.location.search;
console.log(url);
var urlp = new URLSearchParams(url);
var id = urlp.get("id");
if (id != null) //If there IS an ID, show the password reset information. If there is NOT an id, they must be here to start the reset process. So do nothing.
{
    console.log("ID detected: " + id);

    //Hide the initiation steps - they already did these!
    document.getElementById("recovery-initiation").style.display = 'none'; 

    //Show the redeem steps
    document.getElementById("recovery-redemption").style.display = 'block';

    //Start off with a hidden message
    HideRedeemMsg();
}
else
{
    console.log("No password reset ID detected.");

    //Hide the initiation steps - they already did these!
    document.getElementById("recovery-initiation").style.display = 'block'; 

    //Show the redeem steps
    document.getElementById("recovery-redemption").style.display = 'none';
}



//REDEMPTION
var URL = "https://aletheia.azurewebsites.net/RedeemAccountRecovery";
function Redeem()
{
    var pass1 = document.getElementById("input-li-password1").value;
    var pass2 = document.getElementById("input-li-password2").value;

    //Check if we are ready to submit this
    var ReadyToSubmit = false;
    if (pass1 != "" && pass2 != "")
    {
        if (pass1 == pass2)
        {
            ReadyToSubmit = true;
        }
    }

    //If not ready to submit, post an error msg
    if (ReadyToSubmit == false)
    {
        UpdateRedeemMsg("There was a validation error with your new password. Please try again.");
        return;
    }

    //Try to return!
    var payload = {"id": id, "password": pass1};
    var req = new XMLHttpRequest();
    req.open("post", URL);
    req.onreadystatechange = function()
    {
        if (req.readyState == 4)
        {
            if (req.status == 200) //The password reset was successful
            {
                HideRedeemBtn();
                UpdateRedeemMsg("Your password has successfully reset! Please proceed to the login page to log in with your new password.");
            }
            else
            {
                ShowRedeemBtn();
                UpdateRedeemMsg("Password reset failed with code " + req.status.toString() + ": " + req.responseText);
            }
        }
    }

    //Send the request
    req.send(JSON.stringify(payload));

    //After sending the request, show what is happening
    UpdateRedeemMsg("Processing account recovery...");
    HideRedeemBtn();
}

//Set up the listener
document.getElementById("redeem-button").addEventListener("click", Redeem);
