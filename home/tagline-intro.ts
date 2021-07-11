//Fade them out
$("#tagline-main").animate({ opacity: 0, duration: 1})
$("#tagline-sub").animate({ opacity: 0, duration: 1 })

setTimeout(function()
{
    //Set the content
    $("#tagline-main").text("Organizing and Providing the World's Financial Data");
    $("#tagline-sub").text("through a secure REST API");

    //Fade in
    $("#tagline-main").animate({opacity:1, duration: 8000});
    setTimeout(function()
    {
        $("#tagline-sub").animate({opacity: 1, duration: 1000});
    }, 500);
}, 600);

