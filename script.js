//Monster Hunter Series Gallery
//歴代メインシリーズを載せる(全17シリーズ)
//左側と右側にわける
//左側は画像を表示＋slider
//右側はボタンを設置+ボタンを押すと発売日と売上本数が表示される
class SeriesInfo{
    constructor(imgId,title,releaseDate,unitsSold,imgUrl){
        this.imgId = imgId;
        this.title = title;
        this.releaseDate = releaseDate;
        this.unitsSold = unitsSold;
        this.imgUrl = imgUrl;
    }
}


seriesList = [
    new SeriesInfo(1,"モンスターハンター","2004/3/11","28万8559本",);
]


let targetDiv = document.getElementById("target");
//右側の開発
//1.とりあえず0から9までのボタン+クリア/エンターボタンを作る（1列4個）
//2.押した番号を表示する欄（電卓でいう答えの部分）を作る

//ボタンとシリーズ情報を囲うdiv
let rightSideDiv = document.createElement("div");
rightSide.classList.add("col-4","d-flex","justify-content-center","align-items-center");
//シリーズ情報を囲うdiv
let seriesInfoDiv = document.createElement("div");
//ボタンを作るdiv
let btnDiv = document.createElement("div");
btnDiv.classList.add("col-11", "d-flex", "flex-wrap");
