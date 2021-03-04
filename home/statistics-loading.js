//////// VARIABLES ////////////////

var stat_SecFilings = 0;
var stat_Companies = 0;
var stat_Insiders = 0;
var stat_Transactions = 0;

///////////////////////////////////

function LoadStats()
{
    //Sec Entities - Companies & Insiders
    var req_entities = new XMLHttpRequest();
    req_entities.open("get", "https://api.onaletheia.com/api/CountSecEntities");
    req_entities.onreadystatechange = function()
    {
        if (req_entities.readyState == 4 && req_entities.status == 200)
        {
            var req_entities_companies = new XMLHttpRequest();
            req_entities_companies.open("get", "https://api.onaletheia.com/api/CountSecEntities?onlyco=true");
            req_entities_companies.onreadystatechange = function()
            {
                console.log("yadayada");
                if (req_entities_companies.readyState == 4 && req_entities_companies.status == 200)
                {
                    //Get the # of entities in total
                    var total_entities = parseInt(req_entities.responseText);
                    var companies_only = parseInt(req_entities_companies.responseText);

                    //Store!
                    stat_Insiders = total_entities - companies_only;
                    stat_Companies = companies_only;

                    //Set
                    document.getElementById("stat_Insiders").innerText = stat_Insiders.toLocaleString('en');
                    document.getElementById("stat_Companies").innerText = stat_Companies.toLocaleString('en');
                }
            }
            req_entities_companies.send();
        }
    }
    req_entities.send();


    //Sec Filings
    var req_filings = new XMLHttpRequest();
    req_filings.open("get", "https://api.onaletheia.com/api/CountSecFilings");
    req_filings.onreadystatechange = function()
    {
        if (req_filings.readyState == 4 && req_filings.status == 200)
        {
            stat_SecFilings = parseInt(req_filings.responseText);

            //Set
            document.getElementById("stat_SecFilings").innerText = stat_SecFilings.toLocaleString('en');
        }
    }
    req_filings.send();

    //Transactions
    var req_transactions = new XMLHttpRequest();
    req_transactions.open("get", "https://api.onaletheia.com/api/CountTransactions");
    req_transactions.onreadystatechange = function()
    {
        if (req_transactions.readyState == 4 && req_transactions.status == 200)
        {
            stat_Transactions = parseInt(req_transactions.responseText);

            //Set
            document.getElementById("stat_Transactions").innerText = stat_Transactions.toLocaleString('en');
        }
    }
    req_transactions.send();
}

LoadStats();