// //Monster Hunter Series Gallery
// //歴代メインシリーズを載せる(全17シリーズ)
// //左側と右側にわける
// //左側は画像を表示＋slider
// //右側はボタンを設置+ボタンを押すと発売日と売上本数が表示される
class SeriesInfo{
    constructor(imgId,title,releaseDate,unitsSold,imgUrl){
        this.imgId = imgId;
        this.title = title;
        this.releaseDate = releaseDate;
        this.unitsSold = unitsSold;
        this.imgUrl = imgUrl;
    }

    showProfile(){
        return this.title + `<br>` +"発売日：" + this.releaseDate +`<br>`+"売上本数："+this.unitsSold;
    }
}


const seriesList = [
    new SeriesInfo(0,"モンスターハンター","2004/3/11","28万8559本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH.jpg"),
    new SeriesInfo(1,"モンスターハンターG","2005/1/20","約30万本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHG.jpg"),
    new SeriesInfo(2,"モンスターハンターポータブル","2005/12/1","112万2064本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHP.jpg"),
    new SeriesInfo(3,"モンスターハンター2","2006/2/16","69万2228本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH2.jpg"),
    new SeriesInfo(4,"モンスターハンターポータブル2nd","2007/2/22","172万3187本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHP2.jpg"),
    new SeriesInfo(5,"モンスターハンターポータブル2ndG","2008/3/27","422万6265本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHP2G.jpg"),
    new SeriesInfo(6,"モンスターハンター3","2009/8/1","約115万本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH3.jpg"),
    new SeriesInfo(7,"モンスターハンターポータブル3rd","2010/12/1","487万3552本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHP3.jpg"),
    new SeriesInfo(8,"モンスターハンター3G","2011/12/10","194万1106本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH3G.jpg"),
    new SeriesInfo(9,"モンスターハンター4","2013/9/14","359万1334本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH4.jpg"),
    new SeriesInfo(10,"モンスターハンター4G","2014/10/11","261万7803本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MH4G.jpg"),
    new SeriesInfo(11,"モンスターハンタークロス","2015/11/28","283万2833本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHX.jpg"),
    new SeriesInfo(12,"モンスターハンターダブルクロス","2017/3/18","169万8161本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHXX.jpg"),
    new SeriesInfo(13,"モンスターハンター：ワールド","2018/1/26","約340万本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHW.jpg"),
    new SeriesInfo(14,"モンスターハンターワールド：アイスボーン","2019/9/6","164万本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHWI.jpg"),
    new SeriesInfo(15,"モンスターハンターライズ","2021/3/26","235万693本","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHRise.jpg"),
    new SeriesInfo(16,"モンスターハンターライズ：サンブレイク","2022/6/30","No data","https://github.com/Amnis333/Monster-Hunter-Series-Gallary/blob/master/images/MHRiseSunBreak.jpg")
]


let targetDiv = document.getElementById("target");


//slider部分の開発
let sliderShow = document.createElement("div");
sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
let main = document.createElement("div");
main.classList.add("main","full-width");
main.setAttribute("data-index","0");
let extra = document.createElement("div");
extra.classList.add("extra","full-width");

main.append(seriesList[0].imgUrl);
sliderShow.append(main);
sliderShow.append(extra);

function sliderJump(animationType){
    let index = parseInt(main.getAttribute("data-index"));
    let currentItem = seriesList[index];
    index = parseInt(pushedNum.innerHTML);
    let nextItem = seriesList[index];
}








//ボタン・出力結果・シリーズ情報を囲うdiv
let rightSideDiv = document.createElement("div");
rightSideDiv.classList.add("col-12","bg-warning","vh95");

let seriesDiv = document.createElement("div");

//ボタンを作るdiv
let btnDiv = document.createElement("div");
btnDiv.classList.add("bg-dark" ,"flex-wrap","d-flex","justify-content-center")

//ボタンの出力結果を作るdiv
let pushedNum = document.createElement("div");
pushedNum.classList.add("bg-danger","justify-content-center","d-flex");
pushedNum.id = "output";
//pushedNum.value = "";
pushedNum.innerHTML = "";
rightSideDiv.append(pushedNum);

//数字（0-9）のボタン
for (let i = 0; i <= 9; i++){
    let currentBtn = document.createElement("button");
    currentBtn.classList.add("btn","bg-white","m-2","col-3");
    
    
    currentBtn.innerHTML = i.toString();
    
    
    currentBtn.addEventListener("click",function(){
       pushedNum.innerHTML += i.toString();
       enterBtn.classList.remove("bg-white");
       enterBtn.classList.add("bg-danger");
    })
    btnDiv.append(currentBtn);
}



// //Enterボタン
let enterBtn = document.createElement("button");
enterBtn.classList.add("btn","m-2","bg-white","col-3");
enterBtn.innerHTML = "Enter";
btnDiv.append(enterBtn);

enterBtn.addEventListener("click",function(){
    let seriesDiv = document.createElement("div");
    
    if (parseInt(pushedNum.innerHTML) >= seriesList.length){
        alert(`0から${(seriesList.length-1).toString()}までの値を入力してください`);
    }else{
        seriesDiv.innerHTML = seriesList[parseInt(pushedNum.innerHTML)].showProfile();
    }
    
    rightSideDiv.append(seriesDiv);
        
})
rightSideDiv.append(btnDiv);


//Clearボタン
let clearBtn = document.createElement("button");
clearBtn.classList.add("btn","m-2","bg-white","col-3");
clearBtn.innerHTML = "Clear";
clearBtn.addEventListener("click",function(){
    seriesDiv.innerHTML = "";
    pushedNum.innerHTML = "";
    
    enterBtn.classList.remove("bg-danger");
    enterBtn.classList.add("bg-white");
    
    
})
btnDiv.append(clearBtn);


//console.log(seriesList[parseInt("2")].showProfile());

targetDiv.append(rightSideDiv);
// console.log(targetDiv);

//Clearを押してもseriesDiv.innerHTMLが初期化されない問題
//seriesDivを画像divの中に入れてしまう？