$(".copy-btn").mouseover(function()
{
    this.classList.remove("copy-btn-norm");
    this.classList.add("copy-btn-gold");
});

$(".copy-btn").mouseleave(function()
{
    this.classList.remove("copy-btn-gold");
    this.classList.add("copy-btn-norm");
});

$(".copy-btn").click(function()
{
    this.classList.remove("copy-btn-gold");
    this.classList.remove("copy-btn-norm");
    var parent_ele = this.parentElement;
    var parent_ele_jqobj = $(parent_ele);
    var api_key_ele = parent_ele_jqobj.find(".api-key")[0];
    navigator.clipboard.writeText(api_key_ele.innerText);
    this.classList.add("copy-btn-green");
    this.innerText = "Copied!";
    var ToWorkOn = this;
    setTimeout(function()
    {
        ToWorkOn.innerText = "copy";
        ToWorkOn.classList.remove("copy-btn-green");
        ToWorkOn.classList.add("copy-btn-norm");
    }, 1500);
});