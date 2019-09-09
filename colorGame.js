
var numSquare=6;
var colors=[];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var massageDisplay=document.querySelector("#massage");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButton =document.querySelectorAll(".mode");
init();




function init() {
    setUpModeButton();
    setUpSquares();
    reset();
}

function reset(){
    //generate all new colors
    colors=generateRandomColor(numSquare);
    //pick new random color form array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    //change colors of squares
    for (let i = 0; i <squares.length ; i++) {
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else {
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
    massageDisplay.textContent="";
}

resetButton.addEventListener("click",function () {
    reset();
});

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor=color;
    }
}
function setUpModeButton() {
    for (var i = 0; i <modeButton.length ; i++) {
        modeButton[i].addEventListener("click",function () {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent=== "Easy" ? numSquare=3 : numSquare=6;
            reset();
        })
    }
}
function setUpSquares() {
    for (let i = 0; i <squares.length ; i++) {
        squares[i].addEventListener("click",function () {
            var clickedColor=this.style.backgroundColor;
            if(clickedColor === pickedColor){
                massageDisplay.textContent="Correct!";
                resetButton.textContent="Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor=clickedColor;
            }else{
                this.style.backgroundColor="#232323";
                massageDisplay.textContent="Try Again";
            }
        });
    }
}
function pickColor() {
    var randoom=Math.floor(Math.random()*colors.length);
    return colors[randoom];
}

function generateRandomColor(num) {
    //make an array
    var arr=[];
    //repeat num times
    for (var i = 0; i <num ; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 to 255
    var red=Math.floor(Math.random()*256);
    //pick a "green" from 0 to 255
    var green=Math.floor(Math.random()*256);
    //pick a "blue" from 0 to 255
    var blue=Math.floor(Math.random()*256);

    return "rgb(" + red +", "+ green+ ", " + blue+")";
}
