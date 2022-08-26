account = GetAccountFromCookie()




if (account != null)
{

    var username = account.Username;

    if (window.location.href.includes("tier=1"))
    {
        document.getElementById("greeting").innerHTML = "Hello <b>" + username + "</b>! Thank you for your decision to subscribe to Aletheia's <b>10,000 calls/month</b> tier. This plan entitles you to 10,000 requests to Aletheia per month."
    }
    else if (window.location.href.includes("tier=2"))
    {
        document.getElementById("greeting").innerHTML = "Hello <b>" + username + "</b>! Thank you for your decision to subscribe to Aletheia's <b>Unlimited Calls</b> tier. This plan has no limits on the number of requests to Aletheia each month.";
    }
    else
    {
        window.location.href = "../pricing/";
    }
}
else //there is no account (they are not logged in)
{
    if (window.location.href.includes("tier=1"))
    {
        window.location.replace("../login/index.html?ref=subscribe-t1")
    }
    else if (window.location.href.includes("tier=2"))
    {
        window.location.replace("../login/index.html?ref=subscribe-t2")
    }
    else
    {
        window.location.href = "../pricing/";
    }
}