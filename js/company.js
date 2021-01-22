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

    //Hide the list, show the loading pane
    ShowLoading();
    HideTransactionsList();

    //Send it!
    req.send();
}

function AddTransactionToList(transaction)
{
    var ele = document.createElement("div");
    ele.classList.add("security-transaction");

    //Date
    var ele_date = document.createElement("div");
    ele_date.classList.add("st-col");
    ele_date.classList.add("st-col1");
    var dt = new Date(transaction.TransactionDate);
    ele_date.innerText = dt.getMonth() + "/" + dt.getDay() + "/" + dt.getFullYear();
    ele.appendChild(ele_date);

    //Security
    var ele_securitytype = document.createElement("div");
    ele_securitytype.classList.add("st-col");
    ele_securitytype.classList.add("st-col2");
    ele_securitytype.innerText = transaction.SubjectSecurity.SecurityType;
    ele.appendChild(ele_securitytype);

    //Transaction type
    var ele_transactiontype = document.createElement("div");
    ele_transactiontype.classList.add("st-col");
    ele_transactiontype.classList.add("st-col3");
    ele_transactiontype.innerText = transaction.TransactionCode;
    ele.appendChild(ele_transactiontype);

    //Title
    var ele_securitytitle = document.createElement("div");
    ele_securitytitle.classList.add("st-col");
    ele_securitytitle.classList.add("st-col4");
    ele_securitytitle.innerText = transaction.SubjectSecurity.Title;
    ele.appendChild(ele_securitytitle);

    //Quantity
    var ele_quantity = document.createElement("div");
    ele_quantity.classList.add("st-col");
    ele_quantity.classList.add("st-col5");
    ele_quantity.innerText = transaction.Quantity;
    ele.appendChild(ele_quantity);

    //Now add the element to the list
    document.getElementById("results-list-cont").appendChild(ele);
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