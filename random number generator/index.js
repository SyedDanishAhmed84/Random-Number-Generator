const generatebtn=document.getElementById("generate-btn")
const numberelement=document.getElementById("random-number")
generatebtn.addEventListener("click",()=>{
const randomnumber=Math.floor(Math.random()*100)+1;
numberelement.textContent=randomnumber;
});