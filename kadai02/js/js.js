const menuList = [
    {
        "name":"アヒージョ",
        "img":"./img/アヒージョ.jpg",
        "price":1000,
        "tag":"main"
    },
    {
        "name":"トマトとチーズ",
        "img":"./img/tomato.jpg",
        "price":800,
        "tag":"main"
    },
    {
        "name":"ローストビーフ",
        "img":"./img/kokusangyuro-suto.jpg",
        "price":1500,
        "tag":"main"
    },
    {
        "name":"国産牛ステーキ",
        "img":"./img/kokusangyusute-ki.jpg",
        "price":1800,
        "tag":"main"
    },
    {
        "name":"クラフトビール",
        "img":"./img/beer01.jpg",
        "price":500,
        "tag":"liquor"
    },
    {
        "name":"ワイン",
        "img":"./img/wine01.jpg",
        "price":600,
        "tag":"liquor"
    },
    {
        "name":"わいん",
        "img":"./img/wine02.jpg",
        "price":700,
        "tag":"liquor"
    },
    {
        "name":"WINE",
        "img":"./img/wine03.jpg",
        "price":800,
        "tag":"liquor"
    }
]

function init(){
    readJSON();
}

function readJSON(){
    list = JSON.parse(JSON.stringify(menuList));
    console.log(list)
    outputJSON(list);
}

function outputJSON(jsonList){
    let id = 1;
    let html_main = "";
    let html_liquor = "";
    let html_modal = "";
    jsonList.forEach(json =>{
        let className = "";
        if(json.tag == "main"){
            className = "menuImg";
        } else if(json.tag == "liquor") {
            className = "menuImg2";
        }
        let menu = 
            '<div class="col-md-6 col-lg-4 mb-5">' +
                '<div class="col">' +
                    '<img src="' + json.img + '" alt="" class="' + className + ' border border-bottom-0 border-dark border-3 rounded-top">' +
                '</div>' +
                '<div class="col">' +
                    '<div class="border border-top-0 border-dark border-3 rounded-bottom">' +
                        '<div class="row">' +
                            '<div class="col-sm-12 col-md-8">' +
                                '<div class="ms-2">' +
                                    '<p class="text-left mb-0">' + json.name + '</p>' +
                                    '<p class="text-right mb-0"> ¥' + json.price + ' (¥' +parseInt(json.price*1.1) + ')' + '</p>' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-sm-12 col-md-4">' +
                                '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal' + id + '">show</button>' + 
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        if(json.tag == "main"){
            html_main += menu;
        } else if(json.tag == "liquor") {
            html_liquor += menu;
        }

        let modal = 
            '<div class="modal fade" id="exampleModal' + id + '" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog modal-dialog-centered">' +
                    '<div class="modal-content">' +
                        '<div class="modal-header">' +
                            '<h5 class="modal-title" id="exampleModalLabel">' + json.name + '</h5>' +
                            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                        '</div>' +
                        '<div class="modal-body">' +
                            `<img src="${json.img}" alt="" class="modalImg">` +
                        '</div>' +
                        '<div class="modal-footer">' +
                            '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        html_modal += modal;
        id += 1;
    });
    document.getElementById('menuRowMain').innerHTML = html_main;
    document.getElementById('menuRowLiquor').innerHTML = html_liquor;
    document.getElementById('modalParent').innerHTML = html_modal;
}

window.addEventListener("load",init);
