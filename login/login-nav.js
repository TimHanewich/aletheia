//SET BEGINNING OPACITY
$("#register-pane").css("display", "none");
$("#login-pane").css("display", "none");
$("#verify-email-pane").css("display", "none");

$("#returning-user").mouseover(function()
{
    $("#returning-user")[0].innerText = "> Returning User <"
    $("#returning-user")[0].classList.remove("norm-border");
    $("#returning-user")[0].classList.add("gold-border");
});

$("#returning-user").mouseleave(function()
{
    $("#returning-user")[0].innerText = "Returning User"
    $("#returning-user")[0].classList.add("norm-border");
    $("#returning-user")[0].classList.remove("gold-border");
});

$("#new-user").click(NavigateToPane_Register);
$("#returning-user").click(NavigateTo_Login);

$("#new-user").mouseover(function()
{
    $("#new-user")[0].innerText = "> New User <"
    $("#new-user")[0].classList.remove("norm-border");
    $("#new-user")[0].classList.add("gold-border");
});

$("#new-user").mouseleave(function()
{
    $("#new-user")[0].innerText = "New User"
    $("#new-user")[0].classList.add("norm-border");
    $("#new-user")[0].classList.remove("gold-border");
});




//////NAVIGATION BETWEEN PANES

function NavigateToPane_Register()
{
    $("#iama_pane").fadeOut(300, function()
    {
        $("#register-pane").fadeIn(300);
    });
    
}

function NavigateTo_Login()
{
    $("#iama_pane").fadeOut(300, function()
    {
        $("#login-pane").fadeIn(300);
    });
}

function NavigateTo_VerifyEmail()
{
    $("#register-pane").fadeOut(300, function()
    {
        $("#verify-email-pane").fadeIn(300);
    });
}