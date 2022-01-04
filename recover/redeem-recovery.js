//Get the parameters
var url = window.location.search;
console.log(url);
var urlp = new URLSearchParams(url);
var id = urlp.get("id");
if (id != null) //If there IS an ID, show the password reset information. If there is NOT an id, they must be here to start the reset process. So do nothing.
{
    console.log("ID detected: " + id);
}
else
{
    console.log("No password reset ID detected.");
}
