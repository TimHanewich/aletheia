function load_contents(file_name:string)
{
    var req:XMLHttpRequest = new XMLHttpRequest();
    req.open("get", "./articles/" + file_name);
    req.onreadystatechange = function()
    {
        var content:string = req.responseText;
        (document.getElementById("center-cont") as HTMLElement).innerHTML = content;
    }
    req.send();
}

var turl:URL = new URL(window.location.href);
var id:string|null = turl.searchParams.get("id");
if (id == null)
{
    console.log("Article ID was null!");
}
else
{
    var idstr = id as string;
    if (idstr == "introducing-insider-trading-webhook")
    {
        load_contents("introducing-insider-trading-webhook.html");
    }
    else if (idstr == "insider-trading-api")
    {
        load_contents("aletheia-insider-trading-api.html");
    }
    else
    {
        console.log("ID '" + idstr + "' not recognized.");
    }
}