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

