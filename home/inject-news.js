"use strict";
var AllNews = News.GetNews();
for (var i = 0; i < 3; i++) {
    AllNews[i].InjectIntoHtmlElement("news-container");
}
