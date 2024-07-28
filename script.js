let btns = document.querySelectorAll(".btn");    //btns is array and will store all buttons 
let para = document.querySelector(".player");
let reset = document.querySelector(".reset");
let boxes = document.querySelector(".boxes");
let turn = "1";




//iterating and applying same thing to all buttons 
btns.forEach((btn) => {
    btn.addEventListener("click" , () =>{
        if(turn=="1"){
            btn.textContent = "X" ;
            para.textContent= "Player-2 : O";
            turn="2";
        }
        else{
            btn.textContent = "O";
            para.textContent = "Player-1 : X" ;
            turn="1";
        }
        //So that no one changes the already written X/O we disable the button by :
        btn.disabled =  true ;

        checkWinner();
    });
});

const enableBtns = () =>{
    for(let btn of btns){
        btn.disabled=false ;
        btn.textContent = "";
    }
};

//defining function to reset the game : 
const resetGame = () =>{
    turn = "1";
    enableBtns();
    para.textContent="New Game";
    reset.textContent = "Reset Game"
    reset.classList.remove("New-game");
    reset.classList.add("New-game");
};

//storing all those indices of 2D array which are winning 
const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,3,6],
    [0,4,8]
];

//defining a new function so that after we get our winner we disable other buttons 
const disableBtns = () =>{
    for(let btn of btns){
        btn.disabled=true ;
    }
}

//Similarly creating a fn to enable all boxes after new Game or reset game is clicked 

const checkWinner = ()=> {
    for(let innerArr of arr ){
        let pos1 = btns[innerArr[0]].innerText;
        let pos2 = btns[innerArr[1]].innerText;
        let pos3 = btns[innerArr[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                para.textContent = "Player " + turn + " is Winner";
                disableBtns();
                reset.textContent = "New Game";
                reset.classList.add("New-game");
            }
        }
    }
}

reset.addEventListener("click" , resetGame);





