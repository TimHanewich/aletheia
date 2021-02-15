$(".service-preview").mouseover(function()
{
    var ele_id = this.id;
    var ele_jq = $(this)
    
    //Find the symb object
    ele_jq.find(".service-preview-symb")[0].classList.remove("service-preview-symb-norm");
    ele_jq.find(".service-preview-symb")[0].classList.add("service-preview-symb-gold");


})

$(".service-preview").mouseleave(function()
{
    var ele_jq = $(this)
    ele_jq.find(".service-preview-symb")[0].classList.remove("service-preview-symb-gold");
    ele_jq.find(".service-preview-symb")[0].classList.add("service-preview-symb-norm");
})