//Basic way of doing the navigation
//The navigation verb/name pair has the following format:
//navep_NAME
//Then the title of the documentation section for the api has the following name:
//ep_NAME
//Then with JQuery (see below), create the click function which scrolls the documentation into view.

$("#navep_SearchEntities").click(function()
{
    $("#ep_SearchEntities")[0].scrollIntoView();
});

$("#navep_LatestTransactions").click(function()
{
    $("#ep_LatestTransactions")[0].scrollIntoView();
});

$("#navep_LatestFilings").click(function()
{
    $("#ep_LatestFilings")[0].scrollIntoView();
});

$("#navep_EntityFilings").click(function()
{
    $("#ep_EntityFilings")[0].scrollIntoView();
});

$("#navep_OpenForm4").click(function()
{
    $("#ep_OpenForm4")[0].scrollIntoView();
});

$("#navep_OpenCommonFinancials").click(function()
{
    $("#ep_OpenCommonFinancials")[0].scrollIntoView();
});

$("#navep_GetEntity").click(function()
{
    $("#ep_GetEntity")[0].scrollIntoView();
});

$("#navep_GetFiling").click(function()
{
    $("#ep_GetFiling")[0].scrollIntoView();
});

$("#navep_AffiliatedOwners").click(function()
{
    $("#ep_AffiliatedOwners")[0].scrollIntoView();
});

$("#navep_Version").click(function()
{
    $("#ep_Version")[0].scrollIntoView();
});

$("#navep_CountEntities").click(function()
{
    $("#ep_CountEntities")[0].scrollIntoView();
});

$("#navep_CountFilings").click(function()
{
    $("#ep_CountFilings")[0].scrollIntoView();
});

$("#navep_CountTransactions").click(function()
{
    $("#ep_CountTransactions")[0].scrollIntoView();
});

$("#navep_StockData").click(function()
{
    $("#ep_StockData")[0].scrollIntoView();
})

$("#navep_CommonFinancials").click(function()
{
    $("#ep_CommonFinancials")[0].scrollIntoView();
})

$("#navep_FinancialFactTrend").click(function()
{
    $("#ep_FinancialFactTrend")[0].scrollIntoView();
});


