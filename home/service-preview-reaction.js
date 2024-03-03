var LastLoadedPreviewId = "";

$(".service-preview").click(function()
{
    RemoveAllHighlights();

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
        
            gcr_ToGetContent = "Stock data for Procter & Gamble ($PG)"
            gcr_YouCallContent = "api.aletheiaapi.com/StockData?symbol=pg";
            gcr_AndReceiveContent = "{<br><tabspace></tabspace>\"Symbol\": \"PG\",<br><tabspace></tabspace>\"FullTimeEmployees\": 101000,<br><tabspace></tabspace>\"Sector\": \"Consumer Defensive\",<br><tabspace></tabspace>\"Industry\": \"Household & Personal Products\",<br><tabspace></tabspace>\"Open\": 150.19,<br><tabspace></tabspace>\"AverageVolume90Day\": 6912683,<br><tabspace></tabspace>\"Exchange\": \"NYQ\",<br><tabspace></tabspace>\"DayHigh\": 152.385,<br><tabspace></tabspace>\"ShortName\": \"Procter & Gamble Company (The)\",<br><tabspace></tabspace>\"LongName\": \"The Procter & Gamble Company\",<br><tabspace></tabspace>\"Change\": 2.26999,<br><tabspace></tabspace>\"PreviousClose\": 149.88,<br><tabspace></tabspace>\"Price\": 152.15,<br><tabspace></tabspace>\"Currency\": \"USD\",<br><tabspace></tabspace>\"Volume\": 11935078,<br><tabspace></tabspace>\"MarketCap\": 368195400000.0,<br><tabspace></tabspace>\"ChangePercent\": 0.0151454,<br><tabspace></tabspace>\"DayLow\": 150.27,<br><tabspace></tabspace>\"BidPrice\": 152.2,<br><tabspace></tabspace>\"BidQuantity\": 900,<br><tabspace></tabspace>\"AskPrice\": 152.2,<br><tabspace></tabspace>\"AskQuantity\": 900.0,<br><tabspace></tabspace>\"AverageVolume10Day\": 8056980,<br><tabspace></tabspace>\"YearLow\": 121.54,<br><tabspace></tabspace>\"YearHigh\": 152.385,<br><tabspace></tabspace>\"Beta\": 0.422337,<br><tabspace></tabspace>\"PriceEarningsRatio\": 27.80519,<br><tabspace></tabspace>\"EarningsPerShare\": 5.472,<br><tabspace></tabspace>\"EarningsDate\": \"2022-01-18T00:00:00\",<br><tabspace></tabspace>\"ForwardDividend\": 3.48,<br><tabspace></tabspace>\"ForwardDividendYield\": 0.0232,<br><tabspace></tabspace>\"ExDividendDate\": \"2021-10-21T00:00:00\",<br><tabspace></tabspace>\"YearTargetEstimate\": 152.93,<br><tabspace></tabspace>\"LastFiscalYearEnd\": \"2021-06-30T00:00:00\",<br><tabspace></tabspace>\"LastFiscalQuarterEnd\": \"2021-09-30T00:00:00\",<br><tabspace></tabspace>\"ProfitMargin\": 0.18332,<br><tabspace></tabspace>\"OperatingMargin\": 0.23948,<br><tabspace></tabspace>\"ReturnOnAssets\": 0.09639,<br><tabspace></tabspace>\"ReturnOnEquity\": 0.29837,<br><tabspace></tabspace>\"Revenue\": 77138000000.0,<br><tabspace></tabspace>\"RevenuePerShare\": 31.468,<br><tabspace></tabspace>\"QuarterlyRevenueGrowth\": 0.053,<br><tabspace></tabspace>\"GrossProfit\": 39144000000.0,<br><tabspace></tabspace>\"EDBITDA\": 21248000000.0,<br><tabspace></tabspace>\"NetIncomeAvailableToCommon\": 13866000000.0,<br><tabspace></tabspace>\"QuarterlyEarningsGrowth\": -0.039,<br><tabspace></tabspace>\"Cash\": 10370000000.0,<br><tabspace></tabspace>\"CashPerShare\": 4.285,<br><tabspace></tabspace>\"Debt\": 32547000000.0,<br><tabspace></tabspace>\"DebtToEquityRatio\": 70.132,<br><tabspace></tabspace>\"CurrentRatio\": 0.665,<br><tabspace></tabspace>\"BookValuePerShare\": 18.7,<br><tabspace></tabspace>\"OperatingCashFlow\": 18275000000.0,<br><tabspace></tabspace>\"LeveredFreeCashFlow\": 12529750000.0,<br><tabspace></tabspace>\"YearChangePercent\": 0.0856936,<br><tabspace></tabspace>\"SP500YearChangePercent\": 0.22585726,<br><tabspace></tabspace>\"MovingAverage50Day\": 144.0168,<br><tabspace></tabspace>\"MovingAverage200Day\": 138.4587,<br><tabspace></tabspace>\"SharesOutstanding\": 2419950000.0,<br><tabspace></tabspace>\"Float\": 2417237500.0,<br><tabspace></tabspace>\"PercentHeldByInsiders\": 0.0010800001,<br><tabspace></tabspace>\"PercentHeldByInstitutions\": 0.65568,<br><tabspace></tabspace>\"SharesShort\": 15019257.0,<br><tabspace></tabspace>\"ShortRatio\": 2.28,<br><tabspace></tabspace>\"ShortPercentOfFloat\": 0.0062,<br><tabspace></tabspace>\"ShortPercentOfSharesOutstanding\": 0.0062,<br><tabspace></tabspace>\"ForwardAnnualDividend\": 3.48,<br><tabspace></tabspace>\"ForwardAnnualDividendYield\": 0.0232,<br><tabspace></tabspace>\"TrailingAnnualDividend\": 3.321,<br><tabspace></tabspace>\"TrailingAnnualDividendYield\": 0.022157727,<br><tabspace></tabspace>\"FiveYearAverageDividendYield\": 2.78,<br><tabspace></tabspace>\"DividendPayoutRatio\": 0.606,<br><tabspace></tabspace>\"DividendDate\": \"2021-11-15T00:00:00\",<br><tabspace></tabspace>\"LastSplitFactor\": \"2:1\",<br><tabspace></tabspace>\"LastSplitDate\": \"2004-06-21T00:00:00\"<br>}";
        }
        else if (ele_id == "sp_Fundamentals")
        {
            descCont = "Our service scans hundreds of thousands of financial statement filings and presents these financial statements in an easily accessible and interpretable manner. Financial data between any two companies will be congruent in format to allow for direct comparison."
            bg_img_src = "home/wallpaper_background/Fundamentals.jpg";
        
            gcr_ToGetContent = "All of Procter & Gamble's annual revenue results since 2017";
            gcr_YouCallContent = "api.aletheiaapi.com/FinancialFactTrend?id=PG&label=0&period=0&after=20170101";
            gcr_AndReceiveContent = "[<br><tabspace></tabspace>{<br><tabspace></tabspace><tabspace></tabspace>\"PeriodStart\": \"2016-07-01T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"PeriodEnd\": \"2017-06-30T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"Value\": 65058000000.0<br><tabspace></tabspace>},<br><tabspace></tabspace>{<br><tabspace></tabspace><tabspace></tabspace>\"PeriodStart\": \"2017-07-01T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"PeriodEnd\": \"2018-06-30T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"Value\": 66832000000.0<br><tabspace></tabspace>},<br><tabspace></tabspace>{<br><tabspace></tabspace><tabspace></tabspace>\"PeriodStart\": \"2018-07-01T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"PeriodEnd\": \"2019-06-30T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"Value\": 67684000000.0<br><tabspace></tabspace>},<br><tabspace></tabspace>{<br><tabspace></tabspace><tabspace></tabspace>\"PeriodStart\": \"2019-07-01T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"PeriodEnd\": \"2020-06-30T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"Value\": 70950000000.0<br><tabspace></tabspace>}<br>]";
        }
        else if (ele_id == "sp_InsiderTrading")
        {
            descCont = "Retrieve historical insider trading records for any company and any individual. Hundreds of thousands of SEC filings at your fingertips with one query.";
            bg_img_src = "home/wallpaper_background/BoardMeeting.jpg";
        
            gcr_ToGetContent = "Elon Musk's trades of $TSLA stock";
            gcr_YouCallContent = "api.aletheiaapi.com/LatestTransactions?issuer=TSLA&owner=1494730";
            gcr_AndReceiveContent = "[<br><tabspace></tabspace>{<br><tabspace></tabspace><tabspace></tabspace>\"Id\": \"54fc3cf0-edf2-44a1-8cca-7fdeab9fbebb\",<br><tabspace></tabspace><tabspace></tabspace>\"FromFiling\": \"19025d3c-0858-400a-bfad-675f759e1ce1\",<br><tabspace></tabspace><tabspace></tabspace>\"EntryType\": 0,<response-example-comment>&nbsp;-&nbsp;a transaction</response-example-comment><br><tabspace></tabspace><tabspace></tabspace>\"QuantityOwnedFollowingTransaction\": 34098596.0,<br><tabspace></tabspace><tabspace></tabspace>\"DirectIndirect\": 1,<br><tabspace></tabspace><tabspace></tabspace>\"SecurityTitle\": \"Common Stock\",<br><tabspace></tabspace><tabspace></tabspace>\"SecurityType\": 0,<response-example-comment>&nbsp;-&nbsp;equity (non-derivative)</response-example-comment><br><tabspace></tabspace><tabspace></tabspace>\"AcquiredDisposed\": 0,<response-example-comment>&nbsp;-&nbsp;An acquisition</response-example-comment><br><tabspace></tabspace><tabspace></tabspace>\"Quantity\": 13037.0,<br><tabspace></tabspace><tabspace></tabspace>\"PricePerSecurity\": null,<br><tabspace></tabspace><tabspace></tabspace>\"TransactionDate\": \"2020-02-14T00:00:00\",<br><tabspace></tabspace><tabspace></tabspace>\"TransactionCode\": 0,<response-example-comment>&nbsp;-&nbsp;an open-market purchase</response-example-comment><br><tabspace></tabspace>},<br><tabspace></tabspace>...<response-example-comment>&nbsp;-&nbsp;full history of trades</response-example-comment><br>]";
        }
        else if (ele_id == "sp_EarningsAnalysis")
        {
            descCont = "We provide sentimental analysis of earnings calls by turning quotes into meaning.";
            bg_img_src = "home/wallpaper_background/EarningsAnalysis.jpg";

            gcr_ToGetContent = "Highlights from Tesla's Q1 2021 Earnings Call";
            gcr_YouCallContent = "api.aletheiaapi.com/EarningsCallHighlights?company=tsla&year=2021&quarter=q1";
            gcr_AndReceiveContent = "[<br><tabspace></tabspace>{<br><tabspace></tabspace><tabspace></tabspace>\"Id\": \"94f3e82b-f6c8-4242-a0cd-36ae8c9b71e3\",<br><tabspace></tabspace><tabspace></tabspace>\"Remark\": \"We are making progress reducing various forms of debt. We also invested $1.5 billion in bitcoin during the quarter, then trimmed our position by 10%, which contributed to a small gain in our Q1 financials. Taking a step back, we've generated $8 billion in operating cash flows and $4 billion in free cash flows over the past four quarters. As we look forward, our plans remain unchanged for long-term growth of 50% annually, and we believe we're on track to exceed that this year as we guided to last quarter.\",<br><tabspace></tabspace><tabspace></tabspace>\"SpokenBy\": {<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"Id\": \"2a16b14e-5617-48e5-a35f-2d04fd4da530\",<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"Name\": \"Zachary Kirkhorn\",<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"Title\": \"Chief Financial Officer\",<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"IsExternal\": false<br><tabspace></tabspace><tabspace></tabspace>},<br><tabspace></tabspace><tabspace></tabspace>\"Highlights\": [<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>{<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"BeginPosition\": 314,<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"EndPosition\": 322,<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"Category\": 2,<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"Rating\": 5.0<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>},<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>{<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"BeginPosition\": 280,<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"EndPosition\": 288,<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"Category\": 2,<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>\"Rating\": 5.0<br><tabspace></tabspace><tabspace></tabspace><tabspace></tabspace>},<br><tabspace></tabspace><tabspace></tabspace>...<br><tabspace></tabspace><tabspace></tabspace>]<br><tabspace></tabspace>},<br><tabspace></tabspace>...<br>}<br";
        }
        else if (ele_id == "sp_SecFilings")
        {
            descCont = "Access millions of filing documents with the Securities Exchange Commission (SEC) for any publically traded company. In addition to this, our service also provides the ability to transform common financial filings (i.e. 10-K, 10-Q, Form 4) into meaningful readable data.";
            bg_img_src = "home/wallpaper_background/SEC.jpg";

            gcr_ToGetContent = "Tesla's ($TSLA) annual financial result filings (filing 10-K)";
            gcr_YouCallContent = "https://api.aletheiaapi.com/EntityFilings?id=tsla&filing=10-K";
            gcr_AndReceiveContent = "[<br><tabspace></tabspace>{<br><tabspace></tabspace><tabspace></tabspace>\"InteractiveDataUrl\": \"https://www.sec.gov/cgi-bin/viewer?action=view&cik=1318605&accession_number=0001564590-21-004599&xbrl_type=v\",<br><tabspace></tabspace><tabspace></tabspace>\"Filing\": \"10-K\",<br><tabspace></tabspace><tabspace></tabspace>\"DocumentsUrl\": \"https://www.sec.gov/Archives/edgar/data/1318605/000156459021004599/0001564590-21-004599-index.htm\",<br><tabspace></tabspace><tabspace></tabspace>\"Description\": \"Annual report [Section 13 and 15(d), not S-K Item 405]<br />Acc-no: 0001564590-21-004599&nbsp;(34 Act)&nbsp; Size: 32 MB\",<br><tabspace></tabspace><tabspace></tabspace>\"FilingDate\": \"2021-02-08T00:00:00\"<br><tabspace></tabspace>},<br><tabspace></tabspace>...<br>]";
        }

        //Fade out the old stuff, in the new stuff
        //SwitchServiceBackgroundImage(bg_img_src);
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

function RemoveAllHighlights()
{
    $(".service-preview").find(".service-preview-symb").removeClass("service-preview-symb-gold");
    $(".service-preview").find(".service-preview-symb").addClass("service-preview-symb-norm");
}

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

//Start off by loading a service preview
setTimeout(function(){document.getElementById("sp_StockData").click();}, 500);
