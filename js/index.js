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
                
                var results = JSON.parse(req.responseText);
                results.forEach(addResultToSearchResults);

                //Unhide the results
                document.getElementById("search-results-master-cont").classList.remove("hidden");
            }
        }
        console.log("Sending...");
        req.send();
    }
}

function addResultToSearchResults(item, index)
{
    //Create the entry element
    var ele = document.createElement("div");
    ele.classList.add("search-result-entry");

    //Same between both - CIK
    var p_CIK = document.createElement("p");
    p_CIK.classList.add("search-result-txt");
    p_CIK.classList.add("search-result-col1");
    p_CIK.innerText = item.CIK;
    ele.appendChild(p_CIK);

    var ENT_TYPE = item.entityType;
    if (ENT_TYPE == "Person")
    {
        
    }
    else if (ENT_TYPE == "Company")
    {

    }

    //Add it to the list
    document.getElementById("search-results-list-cont").appendChild(ele);
}
