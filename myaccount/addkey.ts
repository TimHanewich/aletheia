function AddApiKey(key:string) : void
{
    var ele = document.createElement("div");
    ele.classList.add("api-key-copy-pair");

    var ele_apikey = document.createElement("p");
    ele_apikey.classList.add("api-key");
    ele_apikey.innerText = key;
    ele.appendChild(ele_apikey);

    var ele_copybtn = document.createElement("div");
    ele_copybtn.classList.add("copy-btn");
    ele_copybtn.classList.add("copy-btn-norm");
    ele_copybtn.innerText = "copy";
    ele.appendChild(ele_copybtn);

    //Add to the div
    (document.getElementById("my-api-keys") as HTMLDivElement).appendChild(ele);
}