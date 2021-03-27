var url = window.location.href;
var ThisUrl = new URL(url);
var tutorial_id = ThisUrl.searchParams.get("tutorial");

if(tutorial_id == "pp-watchlist-update")
{
    LoadTutorial("../tutorials/pp-watchlist-update/index.html", "Tutorial - End of Day Watchlist Summary");
}
else if (tutorial_id == "pp-get-stock-data")
{
    LoadTutorial("../tutorials/pp-get-stock-data/index.html", "Access Stock Data in Power Apps/Automate - Aletheia");
}
else
{
    window.alert("Tutorial '" + tutorial_id + "' not recognized.");
}

function LoadTutorial(path, update_page_title)
{
    document.getElementById("tutorial-content").setAttribute("src", path);
    document.title = update_page_title;

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