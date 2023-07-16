let pay = document.getElementById("pay-form");

let pay_button = document.getElementById("pay-button");
pay_button.addEventListener("click",(e)=>{
    e.preventDefault();
    setTimeout(()=>{
        window.location.assign("Successfull.html");
    },1000)
})
