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