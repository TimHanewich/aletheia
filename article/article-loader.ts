function load_contents(file_name:string)
{
    console.log("Opening.");
    var req:XMLHttpRequest = new XMLHttpRequest();
    req.open("get", "./articles/" + file_name);
    req.onreadystatechange = function()
    {
        var content:string = req.responseText;
        console.log("Content: " + content);
        (document.getElementById("center-cont") as HTMLElement).innerHTML = content;
    }
    console.log("About to send");
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
}