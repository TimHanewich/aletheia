function AddApiKey(key:string) : void
{
    var ele = document.createElement("div");
    ele.classList.add("api-key-copy-pair");

    var ele_apikey = document.createElement("p");
    ele_apikey.classList.add("api-key");
    ele_apikey.innerText = key;
    ele.appendChild(ele_apikey);

    var ele_copybtn = document.createElement("div");
    ele_copybtn.classList.add("copy-btn");
    ele_copybtn.classList.add("copy-btn-norm");
    ele_copybtn.innerText = "copy";
    ele.appendChild(ele_copybtn);

    //Build out the detai llist below it
    var dtl:HTMLElement = document.createElement("ul");
    dtl.classList.add("api-key-details-list");
    AddToList(dtl, "Tier: Tier One");
    var callsThisMonthId:string = AddToList(dtl, "Calls this month: counting...");
    AddToList(dtl, "Calls/month quota: 5,000");


    //Add to the div
    (document.getElementById("my-api-keys") as HTMLDivElement).appendChild(ele);

    //Add the detials list to the div (below the one above)
    (document.getElementById("my-api-keys") as HTMLElement).appendChild(dtl);
}

function AddToList(lst:HTMLElement, txt:string) : string
{
    var li:HTMLElement = document.createElement("li");
    li.innerText = txt;
    li.id = RandomId();
    lst.appendChild(li);
    return li.id;
}

function RandomId() : string
{
    var toreturn:string = Math.random().toString().replace(".", "");
    
    return toreturn;
}