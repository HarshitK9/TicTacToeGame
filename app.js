let boxes = document.querySelectorAll(".Box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, PlayerO;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

const disableBoxes = () => {
  for (let Box of boxes) {
    Box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let Box of boxes) {
    Box.disabled = false;
    Box.innerText = "";
  }
};


boxes.forEach((Box) => {
  Box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnO) {
      Box.innerText = "O";
      turnO = false;
    } else {
      Box.innerText = "X";
      turnO = true;
    }
    Box.disabled = true;

    checkWinner();
  });
});



const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
