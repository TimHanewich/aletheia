"use strict";
var AllNews = News.GetNews();
for (var _i = 0, AllNews_1 = AllNews; _i < AllNews_1.length; _i++) {
    var n = AllNews_1[_i];
    var ele = document.createElement("div");
    ele.classList.add("news");
    //Title
    var ele_title = document.createElement("p");
    ele_title.classList.add("whats-new-title");
    ele_title.innerText = n.Title;
    ele.append(ele_title);
    //Description
    var ele_description = document.createElement("p");
    ele_description.classList.add("whats-new-desc");
    ele_description.innerHTML = n.Description;
    ele.append(ele_description);
    //Published at
    var ele_publishedat = document.createElement("p");
    ele_publishedat.classList.add("whats-new-date");
    ele_publishedat.innerText = n.PublishedAt;
    ele.append(ele_publishedat);
    //Add the element to the container on the page
    var cont = document.getElementById("news-container");
    cont.append(ele);
}
