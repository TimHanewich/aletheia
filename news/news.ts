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

        //News 11
        var n11:News = new News();
        n11.Title = "Crypto Quotes Now Available in Power Apps & Power Automate via the Aletheia Connector";
        n11.Description = "This week, the Power Platform (Microsoft Power Apps and Power Automate) added the out-of-the-box capability of retrieving prices and day trading data for cryptocurrencies via the Aletheia connector! <a href=\"/article/index.html?id=power-platform-crypto\">Read more.</a>";
        n11.PublishedAt = "September 8, 2021";
        ToReturn.push(n11);

        //News 10
        var n10:News = new News();
        n10.Title = "Crypto Quotes Now Available via API";
        n10.Description = "You can now request quotes and activity data for virtually any cryptocurrency with Aletheia's new <b>Crypto Quote</b> endpoint. Check it out in the documentation here: <a href=\"/docs/#crypto-quote\">Crypto Quote Documentation</a>.";
        n10.PublishedAt = "August 4, 2021";
        ToReturn.push(n10);

        //News 9
        var n9:News = new News();
        n9.Title = "Insider Trading API Demo Video";
        n9.Description = "See the insider trading service in action in this tutorial demonstration video, now available on YouTube: <a href=\"https://youtu.be/4KwdATNSW0E\">Insider Trading API - Aletheia Demo</a>"
        n9.PublishedAt = "August 4, 2021";
        ToReturn.push(n9);

        //News 8
        var n8:News = new News();
        n8.Title = "Insider Trading Trigger Now Available in Power Automate";
        n8.Description = "The Aletheia connector for the Power Platform received an additional trigger for triggering Power Automate flows when a new insider trading transaction is reported and made publicly available by the Securities Exchange Commission! <a href=\"/article/index.html?id=pp-insider-trading-trigger\">Read more here</a>.";
        n8.PublishedAt = "August 1, 2021";
        ToReturn.push(n8);

        //News 7
        var n7:News = new News();
        n7.Title = "Earnings Call Endpoints Now Available for Consumption";
        n7.Description = "Three new endpoints are now avaialble for consumption! You can now <a href=\"/article/index.html?id=earnings-call-api\">receive earnings call transcripts or just get the highlights</a>!";
        n7.PublishedAt = "JULY 23, 2021";
        ToReturn.push(n7);

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

    public InjectIntoHtmlElement(element_id:string):void
    {
        var ele:HTMLElement = document.createElement("div");
        ele.classList.add("news");
        
        //Title
        var ele_title:HTMLElement = document.createElement("p");
        ele_title.classList.add("whats-new-title");
        ele_title.innerHTML = this.Title;
        ele.append(ele_title);

        //Description
        var ele_description:HTMLElement = document.createElement("p");
        ele_description.classList.add("whats-new-desc");
        ele_description.innerHTML = this.Description;
        ele.append(ele_description);

        //Published at
        var ele_publishedat:HTMLElement = document.createElement("p");
        ele_publishedat.classList.add("whats-new-date");
        ele_publishedat.innerHTML = this.PublishedAt;
        ele.append(ele_publishedat);

        //Add the element to the container on the page
        var cont:HTMLElement = document.getElementById(element_id) as HTMLElement;
        cont.append(ele);
    }
}