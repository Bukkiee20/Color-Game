var numCircles=6;
var circles= document.querySelectorAll(".circle");
var rgb= document.querySelector("#rgb");
var h1= document.querySelector("h1");
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
        if(colors[i]){
            circles[i].style.backgroundColor = colors[i];
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
    replay.textContent= "Replay";
    message.textContent= "";
    
    for(var i= 0; i < circles.length; i++){
        circles[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue";
});

rgb.textContent= pickedColor;

for(var i= 0; i < circles.length; i++){
    circles[i].style.backgroundColor = colors[i];
    circles[i].addEventListener("click", function(){

        var clickedColor= this.style.backgroundColor;
        console.log(clickedColor,pickedColor);
        if(clickedColor===pickedColor){
            message.textContent="Correct!";
            replay.textContent="Play Again";
        }
        else{
            this.style.backgroundColor= "wine";
            message.textContent="Try Again";
    
        }
    });
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
    var x= Math.floor(Math.random() * 256);
    var y= Math.floor(Math.random() * 256);
    var z= Math.floor(Math.random() * 256);

    return "RGB("+ x + ',' + y + ','+ z + ")";
}
