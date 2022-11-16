function init(){
    readJSON();
}

function readJSON(){
    let url = "../json/menu.json"
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        let list = request.response;
        list = JSON.parse(JSON.stringify(list));

        alert(list)
    }
}

window.addEventListener("load",init);
