account = GetAccountFromCookie()

if (account != null)
{
    var greeting = document.getElementById("greeting")
    greeting.innerHTML = greeting.innerHTML.replace("Hello!", "Hello <b>" + account.Username + "</b>!");
}
else
{
    window.location.replace("../login/index.html?ref=subscribe")
}