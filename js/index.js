function redirect_to_about()
{
    window.location.href = "about.html";
}

function searchEntities()
{
    var search_txt = document.getElementById("searchBar").value;
    if (search_txt != "")
    { 
        //clear out the result content
        document.getElementById("search-results-list-cont").innerHTML = "";

        var url = "https://aletheia.azurewebsites.net/api/SearchEntities?term=" + search_txt;
        var req = new XMLHttpRequest();
        req.open("get", url);
        req.onreadystatechange = function()
        {
            if (req.readyState == 4 && req.status == 200)
            {
                console.log(req.responseText);
            }
        }
        console.log("Sending...");
        req.send();
    }
}
