"use strict";
function load_contents(file_name) {
    console.log("Opening.");
    var req = new XMLHttpRequest();
    req.open("get", "./articles/" + file_name);
    req.onreadystatechange = function () {
        var content = req.responseText;
        console.log("Content: " + content);
        document.getElementById("center-cont").innerHTML = content;
    };
    console.log("About to send");
    req.send();
}
var turl = new URL(window.location.href);
var id = turl.searchParams.get("id");
if (id == null) {
    console.log("Article ID was null!");
}
else {
    var idstr = id;
    if (idstr == "introducing-insider-trading-webhook") {
        load_contents("introducing-insider-trading-webhook.html");
    }
}
