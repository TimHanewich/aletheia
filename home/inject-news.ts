var AllNews:Array<News> = News.GetNews();
for (let i = 0; i < 3; i++)
{
    AllNews[i].InjectIntoHtmlElement("news-container");
}