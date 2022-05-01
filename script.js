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


const seriesList = [
    new SeriesInfo(1,"モンスターハンター","2004/3/11","28万8559本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH.jpg"),
    new SeriesInfo(2,"モンスターハンターG","2005/1/20","約30万本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHG.jpg"),
    new SeriesInfo(3,"モンスターハンターポータブル","2005/12/1","112万2064本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHP.jpg"),
    new SeriesInfo(4,"モンスターハンター2","2006/2/16","69万2228本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH2.jpg"),
    new SeriesInfo(5,"モンスターハンターポータブル2nd","2007/2/22","172万3187本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHP2.jpg"),
    new SeriesInfo(6,"モンスターハンターポータブル2ndG","2008/3/27","422万6265本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHP2G.jpg"),
    new SeriesInfo(7,"モンスターハンター3","2009/8/1","約115万本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH3.jpg"),
    new SeriesInfo(8,"モンスターハンターポータブル3rd","2010/12/1","487万3552本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHP3.jpg"),
    new SeriesInfo(9,"モンスターハンター3G","2011/12/10","194万1106本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH3G.jpg"),
    new SeriesInfo(10,"モンスターハンター4","2013/9/14","359万1334本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH4.jpg"),
    new SeriesInfo(11,"モンスターハンター4G","2014/10/11","261万7803本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH4G.jpg"),
    new SeriesInfo(12,"モンスターハンタークロス","2015/11/28","283万2833本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHX.jpg"),
    new SeriesInfo(13,"モンスターハンターダブルクロス","2017/3/18","169万8161本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHXX.jpg"),
    new SeriesInfo(14,"モンスターハンター：ワールド","2018/1/26","約340万本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHW.jpg"),
    new SeriesInfo(15,"モンスターハンターワールド：アイスボーン","2019/9/6","164万本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHWI.jpg"),
    new SeriesInfo(16,"モンスターハンターライズ","2021/3/26","235万693本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHRise.jpg"),
    new SeriesInfo(17,"モンスターハンターライズ：サンブレイク","2022/6/30","No data","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHRiseSunBreak.jpg")
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
