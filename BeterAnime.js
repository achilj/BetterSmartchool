/*
    Achilj

*/

function setImg(imgURL) {
    var block = document.getElementById("centercontainer").children[0];
    block.innerHTML = "";
    var imges = imgURL.split('\n');
    imgURL = imges[Math.floor(Math.random() * imges.length)]

    var div = document.createElement('div');
    div.style = `width: 50%;height: auto;`;

    var img = document.createElement('img');
    img.setAttribute("src", imgURL);
    img.style = `width: 50%;height: auto;display:block;margin:auto;`;

    block.appendChild(img);
}

chrome.storage.sync.get(
    {
        img: '',
    }, function (items) {
        if (items.img != '') {
            setImg(items.img);
        }
    }
);