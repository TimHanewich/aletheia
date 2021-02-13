function StoreAccountToCookie(account_obj)
{
    document.cookie = "aletheia_account=" + JSON.stringify(account_obj);
    GetAccountFromCookie();
}

function GetAccountFromCookie()
{
    var thiscookie = document.cookie;
    var loc1 = 0;
    var loc2 = 0;
    loc1 = thiscookie.indexOf("aletheia_account");
    if (loc1 == -1)
    {
        return null;
    }
    loc1 = thiscookie.indexOf("=", loc1 + 1);
    loc2 = thiscookie.indexOf(";", loc1 + 1);
    var fulljson = "";
    if (loc2 == -1)
    {
        fulljson = thiscookie.substring(loc1 + 1);
    }
    else
    {
        fulljson = thiscookie.substring(loc1 + 1, loc2);
    }
    var json_obj = JSON.parse(fulljson);
    return json_obj;
}