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