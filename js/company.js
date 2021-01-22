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

    //Name
    var ele_name = document.createElement("div");
    ele_name.classList.add("st-col");
    ele_name.classList.add("st-col2");
    var personname = transaction.OwnedBy.FullName;
    if (personname.length > 13)
    {
        personname = personname.substring(0, 13) + "...";
    }
    ele_name.innerText = personname;
    ele.appendChild(ele_name);

    //Security
    var ele_securitytype = document.createElement("div");
    ele_securitytype.classList.add("st-col");
    ele_securitytype.classList.add("st-col3");
    var security_type_val = transaction.SubjectSecurity.SecurityType;
    var security_type_str = "";
    if (security_type_val == 0)
    {
        security_type_str = "Equity"
    }
    else if (security_type_val == 1)
    {
        security_type_str = "Derivative";
    }
    else
    {
        security_type_str = "?";
    }
    ele_securitytype.innerText = security_type_str;
    ele.appendChild(ele_securitytype);

    //Transaction type
    var ele_transactiontype = document.createElement("div");
    ele_transactiontype.classList.add("st-col");
    ele_transactiontype.classList.add("st-col4");
    ele_transactiontype.innerText = transaction.TransactionCode;
    ele.appendChild(ele_transactiontype);

    //Title
    var ele_securitytitle = document.createElement("div");
    ele_securitytitle.classList.add("st-col");
    ele_securitytitle.classList.add("st-col5");
    var securitytitle = transaction.SubjectSecurity.Title;
    if (securitytitle.length > 15)
    {
        securitytitle = securitytitle.substring(0, 15) + "...";
    }
    ele_securitytitle.innerText = securitytitle;
    ele.appendChild(ele_securitytitle);

    //Quantity
    var ele_quantity = document.createElement("div");
    ele_quantity.classList.add("st-col");
    ele_quantity.classList.add("st-col6");
    ele_quantity.innerText = transaction.Quantity;
    ele.appendChild(ele_quantity);

    //Select button
    var ele_select = document.createElement("div");
    ele_select.classList.add("st-col");
    ele_select.classList.add("st-col7");
    ele_select.innerText = "+";
    ele.appendChild(ele_select);

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