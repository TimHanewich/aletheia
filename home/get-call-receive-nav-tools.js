function FadeOutGetCallReceive(fade_time, callback)
{
    $(".get-call-receive").fadeOut(fade_time);

    // //Fade out and left animate the  "to get" container
    // $("#gcr_Get").fadeOut({queue: false, duration: fade_time});
    // $("#gcr_Get").animate({queue: false, right: '150px'}, fade_time);

    // //Fade out and right animate the "you call" container
    // $("#gcr_Call").fadeOut({queue: false, duration: fade_time});
    // $("#gcr_Call").animate({queue: false, left: '150px'}, fade_time);

    // //Fade out the "And Receive" container
    // $("#gcr_Receive").fadeOut({queue: false, duration: fade_time});

    //Now wait for the fade out to stop
    setTimeout(() => callback(), fade_time);
}

function SetGetCallResponseInnerHtmlContent(part_get, part_call, part_response)
{
    document.getElementById("gcr_GetContent").innerHTML = part_get;
    document.getElementById("gcr_CallContent").innerHTML = part_call;
    document.getElementById("gcr_ResponseContent").innerHTML = part_response;
}

function FadeInGetCallReceive(fade_time)
{
    $(".get-call-receive").fadeIn(fade_time);

    // // //Fade out and left animate the  "to get" container
    // $("#gcr_Get").fadeIn({queue: false, duration: fade_time});
    // $("#gcr_Get").animate({queue: false, left: '0px', duration: fade_time});

    // //Fade out and right animate the "you call" container
    // $("#gcr_Call").fadeIn({queue: false, duration: fade_time});
    // $("#gcr_Call").animate({queue: false, left: '0px', duration: fade_time});

    // //Fade out the "And Receive" container
    // //$("#gcr_Receive").fadeIn({queue: false, duration: fade_time});
}

function ManagedSwitchGetCallReceive(part_get, part_call, part_response)
{
    FadeOutGetCallReceive(1000, function()
    {
        FadeInGetCallReceive(1000);
    });
}
