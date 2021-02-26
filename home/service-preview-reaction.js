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
        var descCont = "";
        var bg_img_src = "";
        if (ele_id == "sp_TechnicalStockData")
        {
            descCont = "Retrieve technical data for a particular stock. Data is provided in real time and reflects present market conditions. You can request basic data such as stock price, day volume, and P/E ratio, and can also request complex data like held by institutions, dividends, and moving averages."
            bg_img_src = "https://api.time.com/wp-content/uploads/2015/09/gettyimages-487733796.jpg";
        }
        else if (ele_id == "sp_Fundamentals")
        {
            descCont = "Our service scans hundreds of thousands of financial statement filings and presents these financial statements in an easily accessible and interpretable manner. Financial data between any two companies will be congruent in format to allow for direct comparison."
            bg_img_src = "https://d13gx6itgg3b2j.cloudfront.net/img/2016/12/03174627/Thinkstock-programmer.jpg";
        }
        else if (ele_id == "sp_SecFilings")
        {
            descCont = "Access millions of filing documents with the Securities Exchange Commission (SEC) for any publically traded company. In addition to this, our service also provides the ability to transform common financial filings (i.e. 10-K, 10-Q, Form 4) into meaningful readable data.";
            bg_img_src = "https://s.wsj.net/public/resources/images/BN-WB880_WHISTL_GR_20171110133826.jpg";
        }
        else if (ele_id == "sp_FinancialTrends")
        {
            descCont = "Easily request data on financial trends such as revenue, income, and operating cash flow, just to name a few. Our proprietary financial statement processing algorithms allows for the classification of various financial data into common categories for the purpose of juxtaposition."
            bg_img_src = "https://cms.qz.com/wp-content/uploads/2018/08/tesla_going_private_tesla_snap-e1533914066301.jpg?quality=75&strip=all&w=1600&h=900&crop=1";
        }

        //Fade out the old stuff, in the new stuff
        SwitchServiceBackgroundImage(bg_img_src);
        SwitchServiceDescription(descCont);

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