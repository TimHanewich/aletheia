$(".response-example-openclose").click(function()
{
    var parent_cont = this.parentElement;
    var parent_cont_jqobj = $(parent_cont);
    var example_box = parent_cont_jqobj.find(".response-example")[0];

    //Was the response text on or off?
    var includesPlus = this.innerText.includes("+");
    console.log(includesPlus);
    if (includesPlus)
    {
        example_box.classList.remove("hidden");
        this.innerText = "- Example Response";
    }
    else
    {
        example_box.classList.add("hidden");
        this.innerText = "+ Example Response";
    }

    
});

//HIDE ALL API RESPONSE EXAMPLES!
$(".response-example").addClass("hidden");
