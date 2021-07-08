class News
{
    Title:string;
    Description:string;
    PublishedAt:string

    constructor()
    {
        this.Title = "";
        this.Description = "";
        this.PublishedAt = "";
    }

    static GetNews():Array<News>
    {
        var ToReturn:Array<News> = [];

        //News 6
        var n6:News = new News();
        n6.Title = "Insider Trading API Article";
        n6.Description = "New article detailing how the insider trading service works, key features, and how to get started: <a href=\"/article/index.html?id=insider-trading-api\">Aletheia's Insider Trading API.</a>";
        n6.PublishedAt = "JULY 6, 2021";
        ToReturn.push(n6);

        //News 5
        var n5:News = new News();
        n5.Title = "Introducing the Insider Trading Webhook";
        n5.Description = "The Insider Trading Webhook is now publicly available! Check it out here: <a href=\"/article/index.html?id=introducing-insider-trading-webhook\">Introducing Aletheia's Insider Trading Webhook</a>";
        n5.PublishedAt = "JULY 1, 2021";
        ToReturn.push(n5);

        //News 4
        var n4:News = new News();
        n4.Title = "Official pricing page now available";
        n4.Description = "Check out our <a href=\"/pricing/\">official pricing page.</a>";
        n4.PublishedAt = "JUNE 3, 2021";
        ToReturn.push(n4);

        //News 3
        var n3:News = new News();
        n3.Title = "Usage metric endpoints now available";
        n3.Description = "Developers can now monitor their consumption of the Aletheia API service with the <a href=\"/docs/#consumption\">Consumption</a> and <a href=\"/docs/#my-calls\">My Calls</a> endpoints.";
        n3.PublishedAt = "MAY 21, 2021";
        ToReturn.push(n3);

        //News 2
        var n2:News = new News();
        n2.Title = "'Send daily stock performance update' Power Automate template published";
        n2.Description = "Check out our new Power Automate template to learn how to send a daily stock performance to yourself: <a href=\"https://flow.microsoft.com/en-us/galleries/public/templates/37c22a34d3c1433799e74b4ce6c86834/send-daily-stock-performance-update/\">Send daily stock performance update</a>"
        n2.PublishedAt = "MAY 19, 2021";
        ToReturn.push(n2);

        //News 1
        var n1:News = new News();
        n1.Title = "Fundamentals-based endpoints now available in Power Apps and Power Automate";
        n1.Description = "Users of Microsoft's Power Platform can now leverage the <a href=\"/docs/#common-financials\">Common Financials</a> and <a href=\"/docs/#financial-fact-trend\">Financial Fact Trend</a> endpoints with the <a href=\"https://docs.microsoft.com/en-us/connectors/aletheia/#get-financial-fact-trend\">Get Financial Fact Trend</a> and <a href=\"https://docs.microsoft.com/en-us/connectors/aletheia/#get-common-financials\">Get Common Financials</a> actions in their Power Apps and Power Automate flows.";
        n1.PublishedAt = "MAY 11, 2021";
        ToReturn.push(n1);

        return ToReturn;
    }
}