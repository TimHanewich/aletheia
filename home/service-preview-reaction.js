var LastLoadedPreviewId = "";

$(".service-preview").mouseover(function()
{
    var ele_id = this.id;
    var ele_jq = $(this)

    //Find the symb object
    ele_jq.find(".service-preview-symb")[0].classList.remove("service-preview-symb-norm");
    ele_jq.find(".service-preview-symb")[0].classList.add("service-preview-symb-gold");

    //Only do the animation and stuff if this is not the last touched one (it is a new one)
    if (LastLoadedPreviewId != ele_id)
    {
        
        //Set the description content and background image src
        var descCont = ""; //The preview description text
        var bg_img_src = ""; //The background image url
        var gcr_ToGetContent = "";
        var gcr_YouCallContent = "";
        var gcr_AndReceiveContent = "";

        if (ele_id == "sp_StockData")
        {
            descCont = "Retrieve technical data for a particular stock. Data is provided in real time and reflects present market conditions. You can request basic data such as stock price, day volume, and P/E ratio, and can also request complex data like held by institutions, dividends, and moving averages."
            bg_img_src = "home/wallpaper_background/StockData.jpg";
        
            gcr_ToGetContent = "Stock data for Apple ($AAPL)"
            gcr_YouCallContent = "api.aletheiaapi.com/StockData?symbol=aapl";
            gcr_AndReceiveContent = "{<br><tabspace></tabspace>\"Symbol\": \"AAPL\",<br><tabspace></tabspace>\"Summary\": {<br><tabspace></tabspace><tabspace></tabspace>\"Name\": \"Apple Inc.\",<br><tabspace></tabspace><tabspace></tabspace>\"StockSymbol\": \"AAPL\",<br><tabspace></tabspace><tabspace></tabspace>\"Price\": 121.26,<br><tabspace></tabspace><tabspace></tabspace>\"DollarChange\": 0.27,<br><tabspace></tabspace><tabspace></tabspace>\"PercentChange\": 0.0022,<br><tabspace></tabspace><tabspace></tabspace>\"PreviousClose\": 120.99,<br><tabspace></tabspace><tabspace></tabspace>\"Open\": 122.59,<br><tabspace></tabspace><tabspace></tabspace>\"BidPrice\": 121.69,<br><tabspace></tabspace><tabspace></tabspace>\"BidQuantity\": 1400,<br><tabspace></tabspace><tabspace></tabspace>\"AskPrice\": 121.76,<br><tabspace></tabspace><tabspace></tabspace>\"AskQuantity\": 800,<br><tabspace></tabspace><tabspace></tabspace>\"DayRangeLow\": 121.2,<br><tabspace></tabspace><tabspace></tabspace>\"DayRangeHigh\": 124.85,<br><tabspace></tabspace><tabspace></tabspace>\"YearRangeLow\": 53.15,<br><tabspace></tabspace><tabspace></tabspace>\"YearRangeHigh\": 145.09,<br><tabspace></tabspace><tabspace></tabspace>\"Volume\": 164560045,<br><tabspace></tabspace><tabspace></tabspace>\"AverageVolume\": 107597034,<br><tabspace></tabspace><tabspace></tabspace>\"MarketCap\": 2035999965184.0,<br><tabspace></tabspace><tabspace></tabspace>\"Beta\": 1.27,<br><tabspace></tabspace><tabspace></tabspace>\"PriceEarningsRatio\": 32.89,<br><tabspace></tabspace><tabspace></tabspace>\"EarningsPerShare\": 3.69,<br><tabspace></tabspace><tabspace></tabspace>\"EarningsDate\": \"2021-04-28T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"ForwardDividend\": 0.82,<br><tabspace></tabspace><tabspace></tabspace>\"ForwardDividendYield\": 0.0068,<br><tabspace></tabspace><tabspace></tabspace>\"ExDividendDate\": \"2021-02-05T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"YearTargetEstimate\": 151.75,<br><tabspace></tabspace><tabspace></tabspace>\"QueriedSymbol\": \"AAPL\",<br><tabspace></tabspace><tabspace></tabspace>\"DataCollectedOn\": \"2021-02-28T23:46:09.4465222+00:00\"<br><tabspace></tabspace>}<br>}<br>";
        }
        else if (ele_id == "sp_Fundamentals")
        {
            descCont = "Our service scans hundreds of thousands of financial statement filings and presents these financial statements in an easily accessible and interpretable manner. Financial data between any two companies will be congruent in format to allow for direct comparison."
            bg_img_src = "home/wallpaper_background/Fundamentals.jpg";
        }
        else if (ele_id == "sp_InsiderTrading")
        {
            descCont = "Retrieve historical insider trading records for any company and any individual. Hundreds of thousands of SEC filings at your fingertips with one query.";
            bg_img_src = "home/wallpaper_background/BoardMeeting.jpg";
        
            gcr_ToGetContent = "Elon Musks's trades of $TSLA stock";
            gcr_YouCallContent = "api.aletheiaapi.com/LatestTransactions?issuer=TSLA&owner=1494730";
            gcr_AndReceiveContent = "[<br><tabspace></tabspace>{<br><tabspace></tabspace><tabspace></tabspace>\"Id\": \"54fc3cf0-edf2-44a1-8cca-7fdeab9fbebb\",<br><tabspace></tabspace><tabspace></tabspace>\"FromFiling\": \"19025d3c-0858-400a-bfad-675f759e1ce1\",<br><tabspace></tabspace><tabspace></tabspace>\"EntryType\": 0,<response-example-comment>&nbsp;-&nbsp;a transaction</response-example-comment><br><tabspace></tabspace><tabspace></tabspace>\"QuantityOwnedFollowingTransaction\": 34098596.0,<br><tabspace></tabspace><tabspace></tabspace>\"DirectIndirect\": 1,<br><tabspace></tabspace><tabspace></tabspace>\"SecurityTitle\": \"Common Stock\",<br><tabspace></tabspace><tabspace></tabspace>\"SecurityType\": 0,<response-example-comment>&nbsp;-&nbsp;equity (non-derivative)</response-example-comment><br><tabspace></tabspace><tabspace></tabspace>\"AcquiredDisposed\": 0,<response-example-comment>&nbsp;-&nbsp;An acquisition</response-example-comment><br><tabspace></tabspace><tabspace></tabspace>\"Quantity\": 13037.0,<br><tabspace></tabspace><tabspace></tabspace>\"PricePerSecurity\": null,<br><tabspace></tabspace><tabspace></tabspace>\"TransactionDate\": \"2020-02-14T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"TransactionCode\": 0,<response-example-comment>&nbsp;-&nbsp;an open-market purchase</response-example-comment><br><tabspace></tabspace>},<br><tabspace></tabspace>...<response-example-comment>&nbsp;-&nbsp;full history of trades</response-example-comment><br>]";
        }
        else if (ele_id == "sp_EarningsAnalysis")
        {
            descCont = "We provide sentimental analysis of earnings calls by turning quotes into meaning.";
            bg_img_src = "home/wallpaper_background/EarningsAnalysis.jpg";
        }
        else if (ele_id == "sp_SecFilings")
        {
            descCont = "Access millions of filing documents with the Securities Exchange Commission (SEC) for any publically traded company. In addition to this, our service also provides the ability to transform common financial filings (i.e. 10-K, 10-Q, Form 4) into meaningful readable data.";
            bg_img_src = "home/wallpaper_background/SEC.jpg";
        }

        //Fade out the old stuff, in the new stuff
        SwitchServiceBackgroundImage(bg_img_src);
        SwitchServiceDescription(descCont);

        //If content data exists for the get, call, and receive content, show it. if not, hide it!
        if (gcr_ToGetContent != "" && gcr_YouCallContent != "" && gcr_AndReceiveContent != "")
        {
            ManagedSwitchGetCallReceive(gcr_ToGetContent, gcr_YouCallContent, gcr_AndReceiveContent);
        }
        else
        {
            $(".get-call-receive").fadeOut(500);
        }
        
    }

    

    //Set the last touched
    LastLoadedPreviewId = ele_id;
    
})

$(".service-preview").mouseleave(function()
{
    var ele_jq = $(this)
    ele_jq.find(".service-preview-symb")[0].classList.remove("service-preview-symb-gold");
    ele_jq.find(".service-preview-symb")[0].classList.add("service-preview-symb-norm");
})

async function SwitchServiceBackgroundImage(img_src)
{
    var ele_bg_img = $("#showcase-bg-img");
    ele_bg_img.fadeOut(500, function()
    {
        document.getElementById("showcase-bg-img").setAttribute("src", img_src);
        ele_bg_img.fadeIn(500);
    });
}

async function SwitchServiceDescription(service_desc)
{
    var ele_service_desc = $("#service-description");
    ele_service_desc.fadeOut(500, function()
    {
        document.getElementById("service-description").innerText = service_desc;
        ele_service_desc.fadeIn(500);
    });

}

//Fade the get, call, receive section out because it will be blank by default when the page first loads
$(".get-call-receive").fadeOut(1);