function FadeOutGetCallReceive(fade_time, callback)
{
    $(".get-call-receive").fadeOut(fade_time);

    //Now wait for the fade out to stop
    setTimeout(() => callback(), fade_time);
}

function FadeInGetCallReceive(fade_time)
{
    $(".get-call-receive").fadeIn(fade_time);
}

function SetGetCallResponseInnerHtmlContent(part_get, part_call, part_response)
{
    document.getElementById("gcr_GetContent").innerHTML = part_get;
    document.getElementById("gcr_CallContent").innerHTML = part_call;
    document.getElementById("gcr_ResponseContent").innerHTML = part_response;
}

FadeOutGetCallReceive(1000, function()
{
    SetGetCallResponseInnerHtmlContent("hihi", "hello", "world");
});
FadeInGetCallReceive();