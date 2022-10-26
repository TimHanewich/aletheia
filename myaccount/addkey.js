"use strict";
function AddApiKey(key) {
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
    //var dtl:HTMLElement = document.createElement("ul");
    //dtl.classList.add("api-key-details-list");
    //AddToList(dtl, "Tier: Tier One");
    //AddToList(dtl, "Calls/month quota: 5,000");
    //var callsThisMonthId:string = AddToList(dtl, "Calls this month: counting...");
    //Add to the div
    document.getElementById("my-api-keys").appendChild(ele);
    //Add the detials list to the div (below the one above)
    //(document.getElementById("my-api-keys") as HTMLElement).appendChild(dtl);
    //Make the call to get the calls this month count
    //var thisMonth:number = new Date().getMonth() + 1; //Add one because this will return a 0-based (January is 0). The API takes 1 is january.
    //var thisYear:number = new Date().getFullYear();
    //var req:XMLHttpRequest = new XMLHttpRequest();
    //req.open("get", "https://api.aletheiaapi.com/consumption?year=" + thisYear.toString() + "&month=" + thisMonth.toString());
    //req.setRequestHeader("key", key);
    //req.onreadystatechange = function()
    //{
    //    (document.getElementById(callsThisMonthId) as HTMLElement).innerText = "Calls this month: " + req.responseText;
    //}
    //req.send();
}
function AddToList(lst, txt) {
    var li = document.createElement("li");
    li.innerText = txt;
    li.id = RandomId();
    lst.appendChild(li);
    return li.id;
}
function RandomId() {
    var toreturn = Math.random().toString().replace(".", "");
    return toreturn;
}
