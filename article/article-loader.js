"use strict";
function load_contents(file_name) {
    var req = new XMLHttpRequest();
    req.open("get", "./articles/" + file_name);
    req.onreadystatechange = function () {
        var content = req.responseText;
        document.getElementById("center-cont").innerHTML = content;
    };
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
    else if (idstr == "insider-trading-api") {
        load_contents("aletheia-insider-trading-api.html");
    }
    else {
        console.log("ID '" + idstr + "' not recognized.");
    }
}
