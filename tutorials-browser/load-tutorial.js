var url = window.location.href;
var ThisUrl = new URL(url);
var tutorial_id = ThisUrl.searchParams.get("tutorial");

if(tutorial_id == "pp-watchlist-update")
{
    LoadTutorial("../tutorials/pp-watchlist-update/index.html");
}
else
{
    window.alert("Tutorial '" + tutorial_id + "' not recognized.");
}

function LoadTutorial(path)
{
    document.getElementById("tutorial-content").setAttribute("src", path);

    //Make the request for the content
    var req = new XMLHttpRequest();
    req.open("get", path);
    req.onreadystatechange = function()
    {
        if (req.readyState == 4 && req.status == 200)
        {
            var x = req.responseText.indexOf("<body");
            x = req.responseText.indexOf(">", x);
            var y = req.responseText.lastIndexOf("</body>");
            var bodyContent = req.responseText.slice(x + 1, y);
        }
    };
    req.send();
}