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
    var dtl = document.createElement("ul");
    dtl.classList.add("api-key-details-list");
    AddToList(dtl, "Tier: Tier One");
    var callsThisMonthId = AddToList(dtl, "Calls this month: counting...");
    AddToList(dtl, "Calls/month quota: 5,000");
    //Add to the div
    document.getElementById("my-api-keys").appendChild(ele);
    //Add the detials list to the div (below the one above)
    document.getElementById("my-api-keys").appendChild(dtl);
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
