//GLOBAL VARIABLES
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

//Load the account
var account_obj = GetAccountFromCookie();

//If the account is null (the cookie was not found) go to the login page
if (account_obj == null)
{
    window.location.href = "../login/";
}

document.getElementById("username").innerText = account_obj.Username;

//Fill in the created @ date
var d = new Date(account_obj.CreatedAtUtc);
var d_as_str = monthNames[d.getMonth()]; //Month
d_as_str = d_as_str + " " + (d.getDay() + 1).toString() + ", " + d.getFullYear();
document.getElementById("account-created-at").innerText = d_as_str;