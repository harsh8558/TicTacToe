let btn = document.querySelectorAll(".btn");
let body = document.querySelector("body");
let container = document.querySelector(".grid_container");
let msg_div = document.querySelector("#new_game");
let win_msg = document.querySelector(".win_msg");
let new_btn = document.querySelector("#new");
let reset_btn = document.querySelector("#reset");
let head = document.querySelector(".head");
let flag = 0; 
let winArr=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

const disableBtn = ()=>{
  for(let btnh of btn)
    {
      btnh.disabled=true;
    }
}
const enableBtn = ()=>{
  for(let btng of btn)
    {
      btng.disabled=false;
      btng.innerText="";
    }
}

for (let i = 0; i < 9; i++) {
  btn[i].addEventListener("click", (e) => {
    if (flag === 0) {
      e.target.innerText = "X";
      e.target.style.color="red";
      flag = 1;
    } else if (flag === 1) {
      e.target.innerText = "O";
      e.target.style.color="green";
      flag = 0;  
    }
    btn[i].disabled = true;
    checkWinner();
  });
}
const checkWinner=()=>{
  for(let pattern of winArr)
  {
    let pos1val = btn[pattern[0]].innerText;
    let pos2val = btn[pattern[1]].innerText;
    let pos3val = btn[pattern[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!="" )
    {
      if(pos1val===pos2val && pos2val===pos3val)
      {
        displayWinner(pos1val);
      }
    }
  }
}
const displayWinner =(pos1val)=>{
  reset_btn.style.display="none";
  container.style.opacity="50%";
  body.style.backgroundColor="green";
  msg_div.classList.remove("hide");
  win_msg.innerText=`Winner is ${pos1val}`;
  disableBtn();
}

const newButtonOn=()=>{
  flag=0;
  container.style.opacity="100%";
  msg_div.classList.add("hide");
  body.style.backgroundColor="rgb(186, 130, 238)";
  enableBtn();
  reset_btn.style.display="block";
}

const resetBtn = ()=>{
  flag=0;
  enableBtn();
}
reset_btn.addEventListener("click",resetBtn);
new_btn.addEventListener("click", newButtonOn);