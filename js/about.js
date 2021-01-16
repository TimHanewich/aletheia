function PlugInStat_SecFilingsProcessed()
{
    var req = new XMLHttpRequest();
    req.open("get", "https://aletheia.azurewebsites.net/api/CountForm4Documents?");
    req.onreadystatechange = function()
    {
        if (req.readyState == 4 && req.status == 200)
        {
            document.getElementById("stat_SecFilingsProcessed").innerText = req.responseText;
        }
    }
    req.send();
}

function PlugInStat_TransactionsProcessed()
{
    var req = new XMLHttpRequest();
    req.open("get", "https://aletheia.azurewebsites.net/api/CountSecurityTransactions?");
    req.onreadystatechange = function()
    {
        if (req.readyState == 4 && req.status == 200)
        {
            document.getElementById("stat_TransactionsCount").innerText = req.responseText;
        }
    }
    req.send();
}

function PlugInStat_InsideTraders()
{
    var req = new XMLHttpRequest();
    req.open("get", "https://aletheia.azurewebsites.net/api/CountPeople?");
    req.onreadystatechange = function()
    {
        if (req.readyState == 4 && req.status == 200)
        {
            document.getElementById("stat_InsiderTraders").innerText = req.responseText;
        }
    }
    req.send();
}

function PlugInStat_CompanyCount()
{
    var req = new XMLHttpRequest();
    req.open("get", "https://aletheia.azurewebsites.net/api/CountCompanies?");
    req.onreadystatechange = function()
    {
        if (req.readyState == 4 && req.status == 200)
        {
            document.getElementById("stat_CompanyCount").innerText = req.responseText;
        }
    }
    req.send();
}

PlugInStat_SecFilingsProcessed();
PlugInStat_TransactionsProcessed();
PlugInStat_InsideTraders();
PlugInStat_CompanyCount();