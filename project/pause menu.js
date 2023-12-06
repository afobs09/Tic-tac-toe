//turn is for X and O; X=0 & O=1
var turn =0;
var symbol ="";

//mock playboard for determining if row or column or diagonal is achieved
var array=[2,3,4,5,6,7,8,9,10]
function mouseOverSquare(num){
    if (turn==0){
        document.getElementById("button"+num).innerHTML = "<p>X</p>";
        console.log("mouseon"+num);
        document.getElementById("button"+num).style.color = "#d9d9d9";
        document.getElementById("button"+num).style.fontSize = "50px";
    }
    else if (turn==1){
        document.getElementById("button"+num).innerHTML = "<p>O</p>";
        document.getElementById("button"+num).style.color = "#d9d9d9";
        document.getElementById("button"+num).style.fontSize = "50px";
    }
}
function mouseOffSquare(num){
    if (turn==0){
        document.getElementById("button"+num).innerHTML = "";
        console.log("mouseoff"+num);
        document.getElementById("button"+num).style.color = "black";
    }
    else if (turn==1){
        document.getElementById("button"+num).innerHTML = "";
        document.getElementById("button"+num).style.color = "black";
    }
}

function clickedOnSquare(num){
    if (turn==0){
        document.getElementById("square"+num).innerHTML = "<p>X</p>";
        symbol="X";
        turn=1;
        array[num]=0;
    }
    else if (turn==1){
        document.getElementById("square"+num).innerHTML = "<p>O</p>";
        symbol="O";
        turn=0;
        array[num]=1;
    }

    //determines if there is row
    for (let i=0;i<=8; i=i+3){
        if (array[i]==array[i+1] && array[i+1]==array[i+2]){
            alert("GG "+symbol+" wins");
        }
    }
    //determines if there is column
    for (let i=0;i<=8; i=i+1){
        if (array[i]==array[i+3] && array[i+3]==array[i+6]){
            alert("GG "+symbol+" wins");
        }
    }

    //determines if there is diagonal
    if (array[0]==array[4] && array[4]==array[8]){
        alert("GG "+symbol+" wins");
    }
    
    //determines if there is diagonal
    if (array[2]==array[4] && array[4]==array[6]){
        alert("GG "+symbol+" wins");
    }

}
function disappear(){
    document.getElementById("chooseXOrO").innerHTML = "";
    document.getElementById("chooseXOrO").style.backgroundColor="white";
}

var botSymbol=0;
    /*function botMove(){
        clickedOnSquare(Math.floor(Math.random()*8))
    }
    function botIsSymbol(num){
            
    }*/
function playAgainstBot(num){
    botSymbol=num;  
    if (botSymbol==turn){
        document.getElementsByClassName("button").disabled=true;
        clickedOnSquare(Math.floor(Math.random()*8));
        console.log("botsyumbol=turn");
    }
    else if (botSymbol!=turn){
        document.getElementsByClassName("button").disabled=false;
        console.log("botsyumbol does not equal turn");
    }
}

function playAgainstBot2(){
    var emptySpaceFound=false;
    
    while(!emptySpaceFound){
        console.log("in while loop");
        var randomNumber=0;
        var arrayCheck=0;
        randomNumber=Math.floor(Math.random()*8);
        if (array[randomNumber]==0 || array[randomNumber]==1){
            for (let i=0; i<9;i++){
                if (array[i]==0 || array[i]==1){
                    arrayCheck++;
                }
            }
            if (arrayCheck<8){
                continue;
            }
            //added condition to avoid scenario where it couldn't find last square
            else if (arrayCheck==8){
                for (let i=0; i<9;i++){
                    if (array[i]!=0 && array[i]!=1){
                        clickedOnSquare(i);
                        emptySpaceFound=true;
                    }
                }
            }
            else if (arrayCheck==9){
                emptySpaceFound=true; 
            }
        }
        else{
            console.log("in else statement");
            clickedOnSquare(randomNumber);
            emptySpaceFound=true;
        }
    }
}