$(".service-preview").mouseover(function()
{
    var ele_id = this.id;
    var ele_jq = $(this)
    
    //Find the symb object
    ele_jq.find(".service-preview-symb")[0].classList.remove("service-preview-symb-norm");
    ele_jq.find(".service-preview-symb")[0].classList.add("service-preview-symb-gold");

    //Set the description content
    var descCont = "";
    if (ele_id == "sp_TechnicalStockData")
    {
        descCont = "Retrieve technical data for a particular stock. Data is provided in real time and reflects present market conditions. You can request basic data such as stock price, day volume, and P/E ratio, and can also request complex data like held by institutions, dividends, and moving averages."
    }
    else if (ele_id == "sp_Fundamentals")
    {
        descCont = "Our service scans hundreds of thousands of financial statement filings and presents these financial statements in an easily accessible and interpretable manner. Financial data between any two companies will be congruent in format to allow for direct comparison."
    }
    else if (ele_id == "sp_SecFilings")
    {
        descCont = "Access millions of filing documents with the Securities Exchange Commission (SEC) for any publically traded company. In addition to this, our service also provides the ability to transform common financial filings (i.e. 10-K, 10-Q, Form 4) into meaningful readable data.";
    }
    else if (ele_id == "sp_FinancialTrends")
    {
        descCont = "Easily request data on financial trends such as revenue, income, and operating cash flow, just to name a few. Our proprietary financial statement processing algorithms allows for the classification of various financial data into common categories for the purpose of juxtaposition."
    }

    //Fade out the old stuff, in the new stuff
    var ele_service_desc = $("#service-description");
    ele_service_desc.fadeOut(100, function()
    {
        document.getElementById("service-description").innerText = descCont;
        ele_service_desc.fadeIn(100);
    });
    

})

$(".service-preview").mouseleave(function()
{
    var ele_jq = $(this)
    ele_jq.find(".service-preview-symb")[0].classList.remove("service-preview-symb-gold");
    ele_jq.find(".service-preview-symb")[0].classList.add("service-preview-symb-norm");
})