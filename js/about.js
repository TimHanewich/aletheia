function PlugInStat_SecFilingsProcessed()
{
    var req = new XMLHttpRequest();
    req.open("get", "https://www.aletheiaresearch.org/api/CountSecFilings");
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
    req.open("get", "https://www.aletheiaresearch.org/api/CountTransactions");
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

function PlugInStat_SecEntities()
{
    var req = new XMLHttpRequest();
    req.open("get", "https://www.aletheiaresearch.org/api/CountSecEntities");
    req.onreadystatechange = function()
    {
        if (req.readyState == 4 && req.status == 200)
        {
            var asint = parseInt(req.responseText);
            document.getElementById("stat_SecEntities").innerText = asint.toLocaleString();
        }
    }
    req.send();
}



PlugInStat_SecFilingsProcessed();
PlugInStat_TransactionsProcessed();
PlugInStat_SecEntities();