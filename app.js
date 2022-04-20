let fullName = document.querySelector(".fullname");
let tipAmount = document.querySelector(".bill-amount");
let btn = document.querySelector(".btn");
let waiterName = document.querySelector(".name")
let tipPercent = document.querySelector(".tip-percent");




btn.addEventListener("click", ()=>{
   
let userFullName = fullName.value;
let userTipAmount = tipAmount.value;
let userTipPercent = tipPercent.value;
let userWaitName = waiterName.value; 


   let currentTip = userTipAmount * userTipPercent
    alert(`Hello ${userFullName} ,you left ${currentTip} for ${userWaitName}` )
    
})