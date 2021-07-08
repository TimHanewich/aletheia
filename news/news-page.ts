var AllNews:Array<News> = News.GetNews();
for (let n of AllNews)
{
    var ele:HTMLElement = document.createElement("div");
    ele.classList.add("news");
    
    //Title
    var ele_title:HTMLElement = document.createElement("p");
    ele_title.classList.add("whats-new-title");
    ele_title.innerHTML = n.Title;
    ele.append(ele_title);

    //Description
    var ele_description:HTMLElement = document.createElement("p");
    ele_description.classList.add("whats-new-desc");
    ele_description.innerHTML = n.Description;
    ele.append(ele_description);

    //Published at
    var ele_publishedat:HTMLElement = document.createElement("p");
    ele_publishedat.classList.add("whats-new-date");
    ele_publishedat.innerHTML = n.PublishedAt;
    ele.append(ele_publishedat);

    //Add the element to the container on the page
    var cont:HTMLElement = document.getElementById("news-container") as HTMLElement;
    cont.append(ele);
}