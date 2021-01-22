//Get the CIK from the URL
var qs = window.location.search;
var sp = new URLSearchParams(qs);
var CO_ID = sp.get("cik");

function ShowAllTransactions()
{
    var url = "https://aletheia.azurewebsites.net/api/TransactionsByCompany?cik=" + CO_ID + "&top=10";
    var req = new XMLHttpRequest();
    req.open("get", url);
    req.onreadystatechange = function()
    {
        if (req.readyState == 4 && req.status == 200)
        {
            //Clear the contents of the list view

            //Add each
            var results = JSON.parse(req.responseText);
            results.forEach()
            
        }
    }
    req.send();
}

function AddTransactionToList(transaction)
{
    
}

