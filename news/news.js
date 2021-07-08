"use strict";
var News = /** @class */ (function () {
    function News() {
        this.Title = "";
        this.Description = "";
        this.PublishedAt = "";
        this.Link = "";
    }
    News.GetNews = function () {
        var ToReturn = [];
        //News 1
        var n1 = new News();
        n1.Title = "Fundamentals-based endpoints now available in the Power Apps and Power Automate";
        n1.Description = "Users of Microsoft's Power Platform can now leverage the Common Financials and Financial Fact Trend endpoints with the Get Financial Fact Trend and Get Common Financials actions in their Power Apps and Power Automate flows.";
        n1.PublishedAt = "MAY 11, 2021";
        ToReturn.push(n1);
        //News 2
        var n2 = new News();
        n2.Title = "'Send daily stock performance update' Power Automate template published";
        n2.Description = "Check out our new Power Automate template to learn how to send a daily stock performance to yourself: Send daily stock performance update";
        n2.PublishedAt = "MAY 19, 2021";
        ToReturn.push(n2);
        //News 3
        var n3 = new News();
        n3.Title = "Usage metric endpoints now available";
        n3.Description = "Developers can now monitor their consumption of the Aletheia API service with the Consumption and My Calls endpoints.";
        n3.PublishedAt = "MAY 21, 2021";
        ToReturn.push(n3);
        //News 4
        var n4 = new News();
        n4.Title = "Official pricing page now available";
        n4.Description = "Check out our official pricing page.";
        n4.PublishedAt = "JUNE 3, 2021";
        n4.Link = "/pricing/";
        //News 5
        var n5 = new News();
        n5.Title = "Introducing the Insider Trading Webhook";
        n5.Description = "The Insider Trading Webhook is now publicly available! Check it out here: Introducing Aletheia's Insider Trading Webhook";
        n5.PublishedAt = "JULY 1, 2021";
        n5.Link = "/article/index.html?id=introducing-insider-trading-webhook";
        //News 6
        var n6 = new News();
        n6.Title = "Insider Trading API Article";
        n6.Description = "New article detailing how the insider trading service works, key features, and how to get started: Aletheia's Insider Trading API.";
        n6.Link = "/article/index.html?id=insider-trading-api";
        n6.PublishedAt = "JULY 6, 2021";
        return ToReturn;
    };
    return News;
}());
