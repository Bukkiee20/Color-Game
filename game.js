var numCircles=6;
var header= document.getElementById("header");
var circles= document.querySelectorAll(".circle");
var rgb= document.getElementById("rgb");
var easyBtn= document.querySelector("#easyButton");
var hardBtn= document.querySelector("#hardButton");
var colors= generateRandomColors(numCircles);
var pickedColor = randomColorG();
var replay=  document.querySelector("#replay");
var message= document.querySelector("#msg");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");

    numCircles= 3;
    colors= generateRandomColors(numCircles);

    pickedColor = randomColorG();
    rgb.textContent= pickedColor;

    for(var i= 0; i < circles.length; i++){
        if (colors[i]) {
            circles[i].style.background = colors[i];
        }
        else{
            circles[i].style.display= "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");

    numCircles= 6;
    colors= generateRandomColors(numCircles);

    pickedColor = randomColorG();
    rgb.textContent= pickedColor;

    for(var i= 0; i < circles.length; i++){
        circles[i].style.backgroundColor = colors[i];
        circles[i].style.display= "block";
        
    }
});

replay.addEventListener("click", function(){
    colors= generateRandomColors(numCircles);

    pickedColor = randomColorG();
    rgb.textContent= pickedColor;
    replay.textContent= "New Color";
    message.textContent= "";
    
    for(var i= 0; i < circles.length; i++){
        circles[i].style.background = colors[i];
    }
    header.style.backgroundColor= "rgb(18, 51, 79)";
});

rgb.textContent= pickedColor;


for(var i= 0; i < circles.length; i++) {
    circles[i].style.background = colors[i];
    circles[i].addEventListener("click", function(){

        var clickedColor= this.style.backgroundColor;
        console.log(clickedColor,pickedColor);
        console.log(clickedColor === pickedColor);

        if(clickedColor === pickedColor){
            message.textContent="CORRECT!";
            replay.textContent="PLAY AGAIN";
            changeColors(clickedColor);
            header.style.background= clickedColor;
            header.style.width= "100%";

        }
        else{
            this.style.backgroundColor= "black";
            message.textContent="TRY AGAIN";
    
        }
    })
}

function changeColors(colorz){
    for(var i= 0; i < circles.length; i++){
        circles[i].style.backgroundColor = colorz;
        
    }
}

function randomColorG(){
    var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(genColor){
    var arr= [];
 
    for(var i= 0; i < genColor; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
var r= Math.floor(Math.random() * 256);

var g= Math.floor(Math.random() * 256);

var b= Math.floor(Math.random() * 256);

return "rgb(" + r +", " + g + ", " + b +")";
}


