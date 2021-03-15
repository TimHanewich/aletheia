function StartUpTick(stat_ele_id, add_multiplier, wait_time_multiplier)
{
    setInterval(function(){UpTickAfterRandomTime(stat_ele_id, add_multiplier, wait_time_multiplier)}, 1500);
}

function UpTickAfterRandomTime(ele_id, add_mult, wait_mult)
{
    var RandNum = Math.random() * wait_mult;
    setTimeout(function()
    {
        var currentValue = parseInt(document.getElementById(ele_id).innerText.replaceAll(",", ""));
        var toAdd = Math.floor(Math.random() * add_mult);
        var newVal = currentValue + toAdd;
        document.getElementById(ele_id).innerText = newVal.toLocaleString('en');
    }, RandNum);
}