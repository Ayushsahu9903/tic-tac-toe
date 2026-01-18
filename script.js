let but=document.querySelectorAll(".but");
let reset=document.querySelector("#reset");
let new_btn=document.querySelector("#new_btn");
let msgcon=document.querySelector(".msgcon");
let msg=document.querySelector("#msg");
 let turn0=true;
 const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6], [3,4,5],[6,7,8]];

 but.forEach((box)=>{
box.addEventListener("click",()=>{
if(turn0){
 box.innerText="0";
 turn0=false;
}
else{
    box.innerText="X";
    turn0=true;
}
box.disabled=true;
check_winner();
})
 })

 const resetgame=()=>{
turn0=true;
enableBoxes();
msgcon.classList.add("hide");
 };
 const enableBoxes=()=>{
     for(let box of but){
box.disabled=false;
box.innerText=""
    }
 }

  const check_winner=()=>{
     for(let pattern of winpattern){
            let val1=but[pattern[0]].innerText;
            let val2=but[pattern[1]].innerText;
            let val3=but[pattern[2]].innerText;
             if(val1!=""&& val2!="" && val3!=""){
                if(val1===val2 && val2===val3){
                    console.log("winner",val1);
                    showwinner(val1);
                }
            }   
    }
 }; 

 const showwinner=(val1)=>{
 msg.innerText=`Congratulations, Winner is ${val1}`;
 msgcon.classList.remove("hide");
  for(let box of but){
box.disabled=true;
    }
 };


 new_btn.addEventListener("click",resetgame);
 reset.addEventListener("click",resetgame);