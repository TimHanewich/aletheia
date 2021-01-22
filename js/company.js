//Get the CIK from the URL
var qs = window.location.search;
var sp = new URLSearchParams(qs);
var CO_ID = sp.get("cik");

function Req_AllTransactions()
{
    var url = "https://aletheia.azurewebsites.net/api/TransactionsByCompany?cik=" + CO_ID + "&top=10";
    var req = new XMLHttpRequest();
    req.open("get", url);
    req.onreadystatechange = function()
    {
        if (req.readyState == 4 && req.status == 200)
        {
            //Hide the list, show the loading pane
            ShowLoading();
            HideTransactionsList();

            //Clear the contents of the list view
            document.getElementById("results-list-cont").innerHTML = "";

            //Add each
            var results = JSON.parse(req.responseText);
            results.forEach(AddTransactionToList);
            
            //Hide loading, show transactions
            HideLoading();
            ShowTransactionsList();
        }
    }
    req.send();
}

function AddTransactionToList(transaction)
{
    
}


//     Show/Hide transactions below
function ShowLoading()
{
    document.getElementById("recent-transactions-loading-pane").classList.remove("hidden");
    document.getElementById("recent-transactions-loading-txt").classList.remove("hidden");
}

function HideLoading()
{
    document.getElementById("recent-transactions-loading-pane").classList.add("hidden");
    document.getElementById("recent-transactions-loading-txt").classList.add("hidden");
}

function ShowTransactionsList()
{
    document.getElementById("results-list-cont").classList.remove("hidden");
}

function HideTransactionsList()
{
    document.getElementById("results-list-cont").classList.add("hidden");
}