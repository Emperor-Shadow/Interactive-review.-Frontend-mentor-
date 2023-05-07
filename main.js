var selectedRating = document.querySelector("#span-message"),
submitBtn = document.querySelector("#submit")
let buttons = document.querySelectorAll(".rate");
let rate = 0;
let num = 0;
buttons.forEach( rate =>{
  rate.addEventListener("click" , ()=>{
    num = rate.innerText
    buttons.forEach(btn=> btn.classList.remove('active'));
      rate.classList.add('active');
  });
});

submitBtn.addEventListener("click" , ()=>{
 
 if(num == 0) {
   alert("Please choose a rating")
 } else {
   selectedRating.innerText = ` ${num} `;
   document.querySelector(".review").style.display = "none";
   document.querySelector(".rating").style.display = "block"
   
 }
 
})
