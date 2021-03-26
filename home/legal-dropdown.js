$("#tab_legal").mouseover(function()
{
   document.getElementById("legal-dd").classList.remove("hidden");
});

window.onclick = function()
{
    document.getElementById("legal-dd").classList.add("hidden");
}