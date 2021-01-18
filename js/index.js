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
    p_CIK.classList.add("search-result-col2");
    p_CIK.innerText = item.CIK;
    ele.appendChild(p_CIK);

    var ENT_TYPE = item.entityType;
    if (ENT_TYPE == "Person")
    {
        //Entity type tag
        var p_entityType = document.createElement("p");
        p_entityType.classList.add("search-result-txt");
        p_entityType.classList.add("search-result-col1");
        p_entityType.innerText = "Person";
        ele.appendChild(p_entityType);

        //Full name
        var person_name = item.FullName;
        if (person_name.length > 15)
        {
            person_name = person_name.substring(0, 15) + "...";
        }
        var p_name = document.createElement("p");
        p_name.classList.add("search-result-txt");
        p_name.classList.add("search-result-col3");
        p_name.innerText = person_name;
        ele.appendChild(p_name);
    }
    else if (ENT_TYPE == "Company")
    {
        //Entity type tag
        var p_entityType = document.createElement("p");
        p_entityType.classList.add("search-result-txt");
        p_entityType.classList.add("search-result-col1");
        p_entityType.innerText = "Company";
        ele.appendChild(p_entityType);

        //Company name
        var co_name = item.Name;
        if (co_name.length > 15)
        {    
            co_name = co_name.substring(0, 15) + "...";
        }
        var p_name = document.createElement("p");
        p_name.classList.add("search-result-txt");
        p_name.classList.add("search-result-col3");
        p_name.innerText = co_name;
        ele.appendChild(p_name);

        //Trading symbol
        var p_symbol = document.createElement("p");
        p_symbol.classList.add("search-result-txt");
        p_symbol.classList.add("search-results-col4");
        p_symbol.innerText = item.TradingSymbol;
        ele.appendChild(p_symbol);
    }

    //Add it to the list
    document.getElementById("search-results-list-cont").appendChild(ele);
}
