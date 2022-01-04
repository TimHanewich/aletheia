function HideMsg()
{
    document.getElementById("reset-msg").style.display = 'none';
}

function ShowMsg()
{
    document.getElementById("reset-msg").style.display = 'block';
}

function UpdateMsg(txt)
{
    ShowMsg();
    document.getElementById("reset-msg").innerText = txt;
}

function HideBtn()
{
    document.getElementById("reset-button").style.display = 'none';
}

function ShowBtn()
{
    document.getElementById("reset-button").style.display = 'block';
}

function HideRedeemMsg()
{
    document.getElementById("redeem-msg").style.display = 'none';
}

function ShowRedeemMsg()
{
    document.getElementById("redeem-msg").style.display = 'block';
}

function UpdateRedeemMsg(txt)
{
    ShowRedeemMsg();
    document.getElementById("redeem-msg").innerText = txt;
}

function HideRedeemBtn()
{
    document.getElementById("redeem-button").style.display = 'none';
}

function ShowRedeemBtn()
{
    document.getElementById("redeem-button").style.display = 'block';
}