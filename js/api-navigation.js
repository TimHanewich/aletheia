//Basic way of doing the navigation
//The navigation verb/name pair has the following format:
//navep_NAME
//Then the title of the documentation section for the api has the following name:
//ep_NAME
//Then with JQuery (see below), create the click function which scrolls the documentation into view.

$("#navep_SearchPeople").click(function()
{
    $("#ep_SearchPeople")[0].scrollIntoView();
});

$("#navep_SearchCompanies").click(function()
{
    $("#ep_SearchCompanies")[0].scrollIntoView();
});

$("#navep_SearchEntities").click(function()
{
    $("#ep_SearchEntities")[0].scrollIntoView();
});

$("#navep_GetCompany").click(function()
{
    $("#ep_GetCompany")[0].scrollIntoView();
});

$("#navep_LatestTransactions").click(function()
{
    $("#ep_LatestTransactions")[0].scrollIntoView();
});

$("#navep_GetCompanyOwners").click(function()
{
    $("#ep_GetCompanyOwners")[0].scrollIntoView();
});

$("#navep_LatestFilings").click(function()
{
    $("#ep_LatestFilings")[0].scrollIntoView();
});