var url = window.location.href;
var ThisUrl = new URL(url);
var tutorial_id = ThisUrl.searchParams.get("tutorial");

if(tutorial_id == "pp-watchlist-update")
{
    var path = "../tutorials/pp-watchlist-update/index.html";
    var title = "Tutorial - End of Day Watchlist Summary";
    var desc = "Use the Aletheia connector to create a Power Automate workflow to fetch stock prices for stocks or cryptocurrencies in your watchlist.";
    LoadTutorial(path, title, desc);
}
else if (tutorial_id == "pp-get-stock-data")
{
    var path = "../tutorials/pp-get-stock-data/index.html";
    var title = "Access Stock Data in Power Apps/Automate - Aletheia";
    var desc = "Use the Aletheia connector in Power Apps and Power Automate to get stock/crypto prices and other financial data including day change, opening price, volume, and more.";
    LoadTutorial(path, title, desc);
}
else
{
    window.alert("Tutorial '" + tutorial_id + "' not recognized. Please select a tutorial from the Aletheia tutorials page.");
    window.location.href = "../tutorials/";
}

function LoadTutorial(path, update_page_title, meta_description)
{
    //Set page title
    if (update_page_title != null)
    {
        document.title = update_page_title;
    }
    
    //Set meta description
    if (meta_description != null)
    {
        document.getElementsByName("description")[0].setAttribute("content", meta_description);
    }
    else
    {
        document.getElementsByName("description")[0].remove();
    }
    
    //Fill in tutorial into the iframe
    if (update_page_title != null)
    {
        document.getElementById("tutorial-content").setAttribute("src", path);
    }

    //Make the request for the content
    var req = new XMLHttpRequest();
    req.open("get", path);
    req.onreadystatechange = function()
    {
        if (req.readyState == 4 && req.status == 200)
        {
            var ele = document.createElement("html");
            ele.innerHTML = req.responseText;
            var steps = ele.getElementsByClassName("step");
            Array.from(steps).forEach(function(element)
            {
                var ele_step = document.createElement("div");
                ele_step.classList.add("nav-step");
                
                var ele_step_block = document.createElement("div");
                ele_step_block.classList.add("nav-step-block");
                ele_step.appendChild(ele_step_block);

                var ele_title = document.createElement("p");
                ele_title.classList.add("nav-step-title");
                ele_title.innerText = element.innerText;
                ele_step.appendChild(ele_title);

                document.getElementById("navigation-container").appendChild(ele_step);
                console.log("Added");
            });
        }
    };
    req.send();
}