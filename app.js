let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#win-msg");
let msgContainer = document.querySelector(".msg-container");
let resetBtn = document.querySelector(".reset-game");

let turnO = true;

const winningPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        
        if (turnO) {
            box.innerText = "O";
            box.classList.add("o");
            turnO = false;
        }else{
            box.innerText = "X";
            box.classList.add("x");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        
    });
    
    
});


const disableBoxes = () =>{
     for (let box of boxes) {
        box.disabled = true;
     }
};

const enableBoxes = () =>{
     for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
     }
};

let showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");

};

const checkWinner = () =>{
    for (let pattern of winningPattern) { 

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                disableBoxes();
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);



