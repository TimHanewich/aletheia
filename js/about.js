function PlugInStat_SecFilingsProcessed()
{
    var req = new XMLHttpRequest();
    req.open("get", "https://aletheia.azurewebsites.net/api/CountForm4Documents?");
    req.onreadystatechange = function()
    {
        if (req.readyState == 4 && req.status == 200)
        {
            var asint = parseInt(req.responseText);
            document.getElementById("stat_SecFilingsProcessed").innerText = asint.toLocaleString();
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
            var asint = parseInt(req.responseText);
            document.getElementById("stat_TransactionsCount").innerText = asint.toLocaleString();
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
            var asint = parseInt(req.responseText);
            document.getElementById("stat_InsiderTraders").innerText = asint.toLocaleString();
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
            var asint = parseInt(req.responseText);
            document.getElementById("stat_CompanyCount").innerText = asint.toLocaleString();
        }
    }
    req.send();
}

PlugInStat_SecFilingsProcessed();
PlugInStat_TransactionsProcessed();
PlugInStat_InsideTraders();
PlugInStat_CompanyCount();