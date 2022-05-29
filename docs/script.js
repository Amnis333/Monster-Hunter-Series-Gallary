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
    new SeriesInfo(0,"モンスターハンター","2004/3/11","28万8559本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mh_visual.jpg"),
    new SeriesInfo(1,"モンスターハンターG","2005/1/20","約30万本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mhg_visual.jpg"),
    new SeriesInfo(2,"モンスターハンターポータブル","2005/12/1","112万2064本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mhp_visual.jpg"),
    new SeriesInfo(3,"モンスターハンター2","2006/2/16","69万2228本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mh2_visual.jpg"),
    new SeriesInfo(4,"モンスターハンターポータブル2nd","2007/2/22","172万3187本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mhp2_visual.jpg"),
    new SeriesInfo(5,"モンスターハンターポータブル2ndG","2008/3/27","422万6265本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mhp2g_visual.jpg"),
    new SeriesInfo(6,"モンスターハンター3","2009/8/1","約115万本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mh3tri_visual.jpg"),
    new SeriesInfo(7,"モンスターハンターポータブル3rd","2010/12/1","487万3552本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mhp3_visual.jpg"),
    new SeriesInfo(8,"モンスターハンター3G","2011/12/10","194万1106本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mh3trig_visual.jpg"),
    new SeriesInfo(9,"モンスターハンター4","2013/9/14","359万1334本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mh4_visual.jpg"),
    new SeriesInfo(10,"モンスターハンター4G","2014/10/11","261万7803本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mh4g_visual.jpg"),
    new SeriesInfo(11,"モンスターハンタークロス","2015/11/28","283万2833本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mhx_visual.jpg"),
    new SeriesInfo(12,"モンスターハンターダブルクロス","2017/3/18","169万8161本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mhxx_visual.jpg"),
    new SeriesInfo(13,"モンスターハンター：ワールド","2018/1/26","約340万本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mhw_visual.jpg"),
    new SeriesInfo(14,"モンスターハンターワールド：アイスボーン","2019/9/6","164万本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mhwi_visual.jpg"),
    new SeriesInfo(15,"モンスターハンターライズ","2021/3/26","235万693本","https://raw.githubusercontent.com/Amnis333/Monster-Hunter-Series-Gallery/master/docs/images/mhrise_visual.jpg")
]


let targetDiv = document.getElementById("target");
targetDiv.classList.add("row");


//slider部分の開発
let sliderShow = document.createElement("div");
sliderShow.classList.add("col-12","d-flex", "flex-nowrap", "overflow-hiddens","col-md-5");

let main = document.createElement("div");
main.classList.add("main","full-width","d-flex","justify-content-center");
main.setAttribute("data-index","0");

let mainImg = document.createElement("img");
mainImg.classList.add("img-fluid");
mainImg.setAttribute("alt","Responsive image");
main.append(mainImg);


let extra = document.createElement("div");
extra.classList.add("extra","full-width");

let extraImg = document.createElement("img");
extraImg.classList.add("img-fluid");
extraImg.setAttribute("alt","Responsive image");
extra.append(extraImg);



sliderShow.append(main);
sliderShow.append(extra);

function slideJump(steps){
    let index = parseInt(main.getAttribute("data-index"));
    let currentItem = seriesList[index];
    
    index += steps;

    if(index < 0) index = seriesList.length-1;
    else if(index >= seriesList.length) index = 0;

    let nextItem = seriesList[index];

    main.setAttribute("data-index",index.toString());

    animateMain(currentItem,nextItem);
}

function animateMain(currentImage,nextImage){
    mainImg.src = nextImage.imgUrl;
    mainImg.append(nextImage);
    
    extraImg.src = currentImage.imgUrl;
    extraImg.append(currentImage);
    
    main.classList.add("expand-animation");
    extra.classList.add("deplete-animation");

    


    if(nextImage.imgId - currentImage.imgId > 0) {
            sliderShow.innerHTML = "";
            sliderShow.append(extra);
            sliderShow.append(main);
        }else {
            sliderShow.innerHTML = "";
            sliderShow.append(main);
            sliderShow.append(extra);
        }

    

}



//画像以外の全てを囲うdiv
let leftSideDiv = document.createElement("div");
leftSideDiv.classList.add("col-12","col-md-5","mx-md-5");

//タイトルを囲うdiv
let titleH2 = document.createElement("h2");
titleH2.innerHTML = "Monster Hunter Series Gallery !";
titleH2.classList.add("d-flex","justify-content-center","p-2");
leftSideDiv.append(titleH2);

//ManualとMenuを囲うdiv
let manualAndMenuDiv = document.createElement("div");
manualAndMenuDiv.classList.add("row","col-12","mx-1");
leftSideDiv.append(manualAndMenuDiv);

//Manual
let manualH5 = document.createElement("h6");
manualH5.classList.add("col-6","d-flex","justify-content-center");
manualH5.innerHTML = "Manual(Click here !)";
manualH5.addEventListener("click",function(){
    alert(`1.番号を入力する(Clearでリセット)\n2.Enterを入力する\n3.歴代シリーズのパッケージが登場！`);
})
manualAndMenuDiv.append(manualH5);

//Menu
let menuH5 = document.createElement("h6");
menuH5.classList.add("col-6","d-flex","justify-content-center");
menuH5.innerHTML = "Menu(Click here !)";
menuH5.addEventListener("click",function(){
    alert(`0:MH 1:MHG 2:MHP 3:MH2 4:MHP2\n5:MHP2G 6:MH3 7:MHP3 8:MH3G 9:MH4\n10:MH4G 11:MHX 12:MHXX 13:MHW`);
})
manualAndMenuDiv.append(menuH5);

//ボタン・出力結果・シリーズ情報を囲うdiv
let vendingDiv = document.createElement("div");
vendingDiv.classList.add("mt-md-5");

//ボタンと出力結果を囲うdiv
let calculatorDiv = document.createElement("div");
calculatorDiv.classList.add("mt-md-5");
vendingDiv.append(calculatorDiv);

//シリーズ情報を囲うdiv
let seriesDiv = document.createElement("div");
seriesDiv.classList.add("d-md-flex","justify-content-center","p-md-5","p-4","fw-bold")
//ボタンを作るdiv
let btnDiv = document.createElement("div");
btnDiv.classList.add("bg-dark" ,"flex-wrap","d-flex","justify-content-center");

//ボタンの出力結果を作るdiv
let pushedNum = document.createElement("div");
pushedNum.classList.add("bg-danger","justify-content-center","d-flex");
pushedNum.id = "output";
pushedNum.innerHTML = "";
calculatorDiv.append(pushedNum);

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
    
    if (parseInt(pushedNum.innerHTML) >= seriesList.length){
        alert(`0から${(seriesList.length-1).toString()}までの値を入力してください`);
    }else{
        seriesDiv.innerHTML = seriesList[parseInt(pushedNum.innerHTML)].showProfile();
    }
    
    calculatorDiv.append(seriesDiv);
    let currentIndex = parseInt(main.getAttribute("data-index"));
    let nextIndex = parseInt(pushedNum.innerHTML);
    slideJump(nextIndex-currentIndex);
        
})
calculatorDiv.append(btnDiv);


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

leftSideDiv.append(vendingDiv);

targetDiv.append(leftSideDiv);
targetDiv.append(sliderShow);